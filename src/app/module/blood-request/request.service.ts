import {
  BloodRequestQueryInput,
  BloodRequestStatusInput,
  CreateBloodRequestInput,
  LIMIT_PAGE,
  PAGE,
  RequestCancellationInput,
} from "./request.interface";
import httpStatus from "http-status";
import { db } from "../../../utils/prisma";
import AppError from "../../Error/AppError";
import { AuthUser } from "../Auth/auth.interface";
import { getDistance } from "../../../helper/getDistance";
import { getActiveUser } from "../../../helper/getActiveUser";
import { Prisma, RequestStatus } from "../../../generated/prisma";

export const createRequestInToDB = async (
  authUser: AuthUser,
  payload: CreateBloodRequestInput,
) => {
  const request = await db.$transaction(async (tx) => {
    const createdRequest = await tx.bloodRequest.create({
      data: {
        requesterId: authUser.id,

        patientName: payload.patientName,
        bloodGroup: payload.bloodGroup,
        unitsNeeded: payload.unitsNeeded,
        urgency: payload.urgency ?? "MEDIUM",
        neededAt: new Date(payload.neededAt),

        city: payload.city,
        hospitalName: payload.hospitalName,
        hospitalAddress: payload.hospitalAddress,
        locationLat: payload.locationLat,
        locationLng: payload.locationLng,

        description: payload.description,
        status: "PENDING",
      },
    });

    // Create event with metadata
    await tx.event.create({
      data: {
        actorUserId: authUser.id,
        actorType: "USER",
        eventType: "REQUEST_CREATED",
        entityType: "BLOOD_REQUEST",
        entityId: createdRequest.id,
        metadata: {
          matched: null,
        },
      },
    });

    return createdRequest;
  });

  return request;
};

export const getRequestInToDB = async (
  query: Partial<BloodRequestQueryInput>,
) => {
  const {
    searchTerm,
    bloodGroup,
    status,
    urgency,
    date,
    page = Number(PAGE),
    limit = Number(LIMIT_PAGE),
    sortBy,
    sortOrder,
  } = query;

  // 1. Build the "Where" filter
  const where: Prisma.BloodRequestWhereInput = {
    // Only apply filters if they are provided
    ...(bloodGroup && { bloodGroup }),
    ...(status && { status }),
    ...(urgency && { urgency }),
    ...(date && { neededAt: { gte: new Date(date) } }), // Find requests from this date onwards
  };

  // 2. Handle Search (Patient Name or Description)
  if (searchTerm) {
    where.OR = [
      { patientName: { contains: searchTerm, mode: "insensitive" } },
      { description: { contains: searchTerm, mode: "insensitive" } },
      { hospitalName: { contains: searchTerm, mode: "insensitive" } },
    ];
  }

  // 3. Handling high page numbers (e.g., page 2000)
  const skip = (page - 1) * limit;

  // 4. Execute Query & Get Total Count (for Frontend Pagination)
  const [data, total] = await Promise.all([
    db.bloodRequest.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        [sortBy as string]: sortOrder,
      },
      include: {
        requester: {
          select: { name: true },
        },
      },
    }),
    db.bloodRequest.count({ where }),
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

export const getRequestByIdInToDB = async (requestId: string) => {
  const result = await db.bloodRequest.findUnique({
    where: {
      id: requestId,
    },
    include: {
      requester: {
        select: {
          id: true,
          name: true,
          email: true,
          profile: true,
          phone: true,
        },
      },
      assignments: {
        include: {
          donor: {
            select: {
              name: true,
              profile: true,
            },
          },
        },
      },
    },
  });

  if (!result) {
    throw new Error("Blood request not found");
  }
  return result;
};

export const deleteRequestInToDB = async (requestId: string) => {
  // 1. Check if the request exists
  const isExist = await db.bloodRequest.findUnique({
    where: { id: requestId },
  });

  if (!isExist) {
    throw new Error("Blood request not found");
  }

  // 2. Transaction to handle all related cleanup
  const result = await db.$transaction(async (tx) => {
    await tx.notification.deleteMany({
      where: {
        data: {
          equals: { requestId: requestId },
        },
      },
    });

    await tx.requestAssignment.deleteMany({
      where: { requestId },
    });

    await tx.event.deleteMany({
      where: { entityId: requestId },
    });

    const deletedRequest = await tx.bloodRequest.delete({
      where: { id: requestId },
    });

    return deletedRequest;
  });

  return result;
};

export const updateRequestStatusInToDB = async (
  requestId: string,
  { status }: BloodRequestStatusInput,
) => {
  const now = new Date();

  // Define constants (Should ideally come from a config file)
  const DONATION_GAP_DAYS = 90;
  const donationCutoffDate = new Date();
  donationCutoffDate.setDate(now.getDate() - DONATION_GAP_DAYS);

  /* -------------------- 1. INITIAL CHECK -------------------- */
  const request = await db.bloodRequest.findUnique({
    where: { id: requestId },
  });

  if (!request) {
    throw new AppError(httpStatus.NOT_FOUND, "Blood Request Not Found!");
  }

  /* -------------------- 2. TRANSACTION START -------------------- */
  return await db.$transaction(async (tx) => {
    // --- CASE: CANCELLED ---
    if (status === "CANCELLED") {
      await tx.requestAssignment.deleteMany({ where: { requestId } });
      await tx.notification.deleteMany({
        where: { data: { equals: { requestId } } },
      });
      await tx.event.deleteMany({ where: { entityId: requestId } });

      return await tx.bloodRequest.update({
        where: { id: requestId },
        data: { status: "CANCELLED" },
      });
    }

    // --- CASE: EXPIRED ---
    else if (status === "EXPIRED") {
      // Mark all pending assignments as expired so they disappear from donor apps
      await tx.requestAssignment.updateMany({
        where: { requestId, status: "PENDING" },
        data: { status: "TIMED_OUT" },
      });

      // Clear notifications to avoid "ghost" pings
      await tx.notification.deleteMany({
        where: { data: { equals: { requestId } } },
      });

      return await tx.bloodRequest.update({
        where: { id: requestId },
        data: { status: "EXPIRED" },
      });
    }

    // --- CASE: FULFILLED ---
    else if (status === "FULFILLED") {
      // Close all other pending pings
      await tx.requestAssignment.updateMany({
        where: { requestId, status: "PENDING" },
        data: { status: "CANCELLED" },
      });

      return await tx.bloodRequest.update({
        where: { id: requestId },
        data: { status: "FULFILLED" },
      });
    }

    // --- CASE: OPEN (The Matching Engine) ---
    else if (status === "OPEN") {
      // 1. Fetch eligible donors
      const donors = await tx.userProfile.findMany({
        where: {
          bloodGroup: request.bloodGroup,
          isAvailable: true,
          user: { status: "ACTIVE" },
          OR: [
            { lastDonatedAt: { equals: null } },
            { lastDonatedAt: { isSet: false } },
            { lastDonatedAt: { lte: donationCutoffDate } },
          ],
        },
      });

      // 2. Distance Calculation & Sorting
      const targetCity = request.city.trim().toLowerCase();
      const rankedDonors = donors
        .map((donor) => ({
          ...donor,
          distance:
            request.locationLat && donor.latitude
              ? getDistance(
                  Number(request.locationLat),
                  Number(request.locationLng),
                  Number(donor.latitude),
                  Number(donor.longitude),
                )
              : Infinity,
        }))
        .sort((a, b) => {
          const aMatch = a.city?.trim().toLowerCase() === targetCity;
          const bMatch = b.city?.trim().toLowerCase() === targetCity;
          if (aMatch && !bMatch) return -1;
          if (!aMatch && bMatch) return 1;
          return a.distance - b.distance;
        })
        .slice(0, 5); // Limit to top 5 donors

      // 3. Handle "No Donor Found"
      if (rankedDonors.length === 0) {
        await tx.event.updateMany({
          where: { entityId: requestId, eventType: "REQUEST_CREATED" },
          data: { eventType: "NO_DONOR_FOUND", metadata: { matched: false } },
        });
      } else {
        // 4. Bulk Create Assignments
        const deadlineHours = ["HIGH", "CRITICAL"].includes(request.urgency)
          ? 12
          : 24;
        const deadlineDate = new Date(
          now.getTime() + deadlineHours * 60 * 60 * 1000,
        );

        const assignments: Prisma.RequestAssignmentCreateManyInput[] =
          rankedDonors.map((donor) => ({
            requestId,
            donorId: donor.userId,
            status: "PENDING",
            assignedBy: "SYSTEM",
            assignedAt: now,
            responseDeadlineAt: deadlineDate,
          }));

        const notifications: Prisma.NotificationCreateManyInput[] =
          rankedDonors.map((donor) => ({
            userId: donor.userId,
            type: "NEW_ASSIGNMENT",
            title: "Blood Request Assigned",
            body: `Urgent ${request.bloodGroup} requirement in ${request.city}`,
            data: { requestId },
          }));

        await tx.requestAssignment.createMany({ data: assignments });
        await tx.notification.createMany({ data: notifications });

        // 5. Update Audit Event
        await tx.event.updateMany({
          where: { entityId: requestId, eventType: "REQUEST_CREATED" },
          data: {
            metadata: { matched: true, totalDonors: rankedDonors.length },
          },
        });
      }

      return await tx.bloodRequest.update({
        where: { id: requestId },
        data: {
          status: "MATCHING",
        },
      });
    }

    // --- DEFAULT CASE (For generic updates like REJECTED/PENDING) ---
    return await tx.bloodRequest.update({
      where: { id: requestId },
      data: { status },
    });
  });
};

export const requestForCancellationInToDB = async (
  requestId: string,
  payload: RequestCancellationInput,
) => {
  const request = await db.bloodRequest.findFirst({
    where: {
      id: requestId,
      status: {
        in: ["OPEN", "PENDING", "MATCHING"],
      },
    },
  });

  if (!request) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Request cannot be cancelled. It may already be processed or not found.",
    );
  }

  const result = await db.event.create({
    data: {
      actorUserId: payload.actorUserId,
      actorType: "USER",
      entityId: request.id,
      entityType: "BLOOD_REQUEST",
      eventType: "ASKED_FOR_REQUEST_CANCELLED",
      metadata: {
        reason: payload.description,
        previousStatus: request.status,
      },
    },
  });

  return result;
};

export const getOwnRequestsInToDB = async (
  activeUser: AuthUser,
  query: Partial<BloodRequestQueryInput>,
) => {
  await getActiveUser(activeUser.email);

  const {
    searchTerm,
    bloodGroup,
    status,
    urgency,
    date,
    page = Number(PAGE),
    limit = Number(LIMIT_PAGE),
    sortBy = "createdAt",
    sortOrder = "desc",
  } = query;

  const where: Prisma.BloodRequestWhereInput = {
    requesterId: activeUser.id,
    ...(bloodGroup && { bloodGroup }),
    ...(status && { status }),
    ...(urgency && { urgency }),
    ...(date && { neededAt: { gte: new Date(date) } }),
  };

  if (searchTerm) {
    where.AND = [
      { requesterId: activeUser.id },
      {
        OR: [
          { patientName: { contains: searchTerm, mode: "insensitive" } },
          { hospitalName: { contains: searchTerm, mode: "insensitive" } },
          { description: { contains: searchTerm, mode: "insensitive" } },
        ],
      },
    ];
  }

  const skip = (Number(page) - 1) * Number(limit);

  const [data, total] = await Promise.all([
    await db.bloodRequest.findMany({
      where,
      skip,
      take: Number(limit),
      orderBy: {
        [sortBy as string]: sortOrder,
      },
      include: {
        _count: {
          select: { assignments: true },
        },
      },
    }),
    await db.bloodRequest.count({ where }),
  ]);

  return {
    meta: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPage: Math.ceil(total / Number(limit)),
    },
    data,
  };
};

export const RequestService = {
  createRequestInToDB,
  getRequestInToDB,
  getRequestByIdInToDB,
  deleteRequestInToDB,
  updateRequestStatusInToDB,
  requestForCancellationInToDB,
  getOwnRequestsInToDB,
};
