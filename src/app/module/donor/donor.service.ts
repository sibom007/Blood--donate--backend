import httpStatus from "http-status";
import {
  AssignmentStatus,
  ForwardReason,
  Prisma,
  Urgency,
} from "../../../generated/prisma";
import { db } from "../../../utils/prisma";
import AppError from "../../Error/AppError";
import { AuthUser } from "../Auth/auth.interface";
import { LIMIT_PAGE, PAGE } from "../blood-request/request.interface";
import { GetDonorAssignmentsInput } from "./donor.interface";
import { handleAssignmentAccepted, handleAssignmentFailure } from "./donor.utils";

export const getAssignmentsInToDB = async (status: AssignmentStatus) => {
  const assignments = await db.requestAssignment.findMany({
    where: {
      status: status,
    },
    include: {
      request: {
        select: {
          id: true,
          patientName: true,
          bloodGroup: true,
          hospitalName: true,
          city: true,
          urgency: true,
          neededAt: true,
        },
      },
    },
    orderBy: {
      assignedAt: "desc",
    },
  });

  return assignments;
};

export const getDonorAssignmentsInToDB = async (
  user: AuthUser,
  query: GetDonorAssignmentsInput,
) => {
  const {
    status,
    urgency,
    page = Number(PAGE),
    limit = Number(LIMIT_PAGE),
  } = query;

  const where: Prisma.RequestAssignmentWhereInput = {
    donorId: user.id,
    ...(status && { status }),
    ...(urgency && {
      request: {
        urgency: urgency,
      },
    }),
  };

  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    db.requestAssignment.findMany({
      where,
      skip,
      take: limit,
      include: {
        request: {
          select: {
            id: true,
            patientName: true,
            bloodGroup: true,
            hospitalName: true,
            city: true,
            urgency: true,
            neededAt: true,
            locationLat: true,
            locationLng: true,
          },
        },
      },
      orderBy: {
        assignedAt: "desc",
      },
    }),
    db.requestAssignment.count({ where }),
  ]);

  return {
    meta: {
      total,
      page,
      limit,
      totalPage: Math.ceil(total / limit),
    },
    data,
  };
};

export const updateDonorAssignmentsInToDB = async (
  user: AuthUser,
  assignmentId: string,
  payload: { status: AssignmentStatus; responseNote?: string },
) => {
  const { status, responseNote } = payload;
  
  const now = new Date();

  const isAssignmentExist = await db.requestAssignment.findUnique({
    where: { id: assignmentId },
  });

  if (!isAssignmentExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Assignment not found");
  }

  if (isAssignmentExist.donorId !== user.id) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "This assignment does not belong to you",
    );
  }

  return await db.$transaction(async (tx) => {
    // 1. Update the Assignment itself
    const updatedAssignment = await tx.requestAssignment.update({
      where: { id: assignmentId },
      data: {
        status,
        respondedAt: now,
        responseNote,
      },
    });

    /* ---------- SCENARIO: ACCEPTED ---------- */
    if (status === "ACCEPTED") {
      await tx.bloodRequest.update({
        where: { id: isAssignmentExist.requestId },
        data: { status: "FULFILLED" },
      });

      await tx.event.updateMany({
        where: {
          entityId: isAssignmentExist.requestId,
          eventType: "REQUEST_CREATED",
        },
        data: {
          eventType: "DONOR_ACCEPTED",
          metadata: { matched: true, matchedDonorId: user.id, assignmentId },
        },
      });
    }

    /* ---------- SCENARIO: REJECTED ---------- */
    if (status === "REJECTED") {
      const remainingPendingCount = await tx.requestAssignment.count({
        where: {
          requestId: isAssignmentExist.requestId,
          status: "PENDING",
          id: { not: assignmentId },
        },
      });

      if (remainingPendingCount === 0) {
        // TIME LOGIC: Check if we have more than 4 hours left until the deadline
        const deadline = new Date(isAssignmentExist.responseDeadlineAt);
        const diffInMilliseconds = deadline.getTime() - now.getTime();
        const hoursLeft = diffInMilliseconds / (1000 * 60 * 60);

        // Define the threshold (4 hours)
        const isUrgentExpiration = hoursLeft <= 4;

        await tx.bloodRequest.update({
          where: { id: isAssignmentExist.requestId },
          data: {
            status: isUrgentExpiration ? "CANCELLED" : "IN_PROGRESS",
          },
        });

        await tx.event.updateMany({
          where: {
            entityId: isAssignmentExist.requestId,
            eventType: "REQUEST_CREATED",
          },
          data: {
            eventType: isUrgentExpiration
              ? "REQUEST_CANCELLED"
              : "NO_DONOR_FOUND",
            metadata: {
              matched: false,
              totalDonors: 0,
              forwardReason: "REJECTED",
              hoursRemainingAtRejection: hoursLeft.toFixed(2),
              finalAction: isUrgentExpiration
                ? "CANCELLED_DUE_TO_TIME"
                : "REVERTED_TO_PENDING",
            },
          },
        });
      } else {
        // Others are still pending
        await tx.event.updateMany({
          where: {
            entityId: isAssignmentExist.requestId,
            eventType: "REQUEST_CREATED",
          },
          data: {
            metadata: { matched: true, totalDonors: remainingPendingCount },
          },
        });
      }
    }

    return updatedAssignment;
  });
};



export const processExpiredAssignments = async (
  authHeader?: string,
): Promise<number> => {

  const now = new Date();

  // 1. Find all "In-Play" assignments that need checking
  const activeAssignments = await db.requestAssignment.findMany({
    where: {
      OR: [
        { status: "PENDING", responseDeadlineAt: { lte: now } }, 
        { status: "ACCEPTED" }, 
        { status: "REJECTED" }, 
      ],
    },
    select: { id: true, status: true, requestId: true },
  });

  let processedCount = 0;

  for (const item of activeAssignments) {
    try {
      await db.$transaction(async (tx) => {
        const current = await tx.requestAssignment.findUnique({
          where: { id: item.id },
        });

        if (!current) return;

        // CASE 1: TIMEOUT
        if (current.status === "PENDING" && current.responseDeadlineAt <= now) {
          await tx.requestAssignment.update({
            where: { id: item.id },
            data: { status: "TIMED_OUT", forwardReason: "NO_RESPONSE" },
          });
          await handleAssignmentFailure(tx, current.requestId, current.id);
        }

        // CASE 2: ACCEPTED
        // If someone accepted, we must ensure the Request is updated and others are cancelled
        else if (current.status === "ACCEPTED") {
          await handleAssignmentAccepted(tx, current.requestId, current.id);
        }

        // CASE 3: REJECTED
        else if (current.status === "REJECTED") {
          await handleAssignmentFailure(tx, current.requestId, current.id);
        }
      });
      processedCount++;
    } catch (error) {
      console.error(`[CRON_ERROR] Assignment ${item.id}:`, error);
    }
  }

  return processedCount;
};

export const DonorService = {
  getAssignmentsInToDB,
  getDonorAssignmentsInToDB,
  updateDonorAssignmentsInToDB,
  processExpiredAssignments,
};
