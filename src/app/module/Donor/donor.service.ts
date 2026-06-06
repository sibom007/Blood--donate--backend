import AppError from "../../Error/AppError";
import httpStatus from "http-status";
import { db } from "../../../utils/prisma";
import { TokenUser } from "../auth/auth.interface";
import { CreateBloodRequestInput, GetOwnRequestsArgs, PaginatedBloodRequests } from "./donor.interface";
import { bloodRequest } from "@prisma/client";

const createBloodRequestIntoDB = async (
  authUser: TokenUser,
  payload: CreateBloodRequestInput,
) => {
  const requester = await db.user.findUnique({
    where: {
      email: authUser?.email,
    },
  });

  if (!requester) {
    throw new AppError(httpStatus.NOT_FOUND, "Requester not found");
  }

  if (payload.donorId) {
    const donor = await db.user.findUnique({
      where: {
        id: payload.donorId,
      },
    });

    if (!donor) {
      throw new AppError(httpStatus.NOT_FOUND, "Donor not found");
    }

    if (!donor.isDonor) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Selected user is not a donor",
      );
    }

    if (!donor.availability) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Donor is currently unavailable",
      );
    }
  }

  if (payload.inventoryId) {
    const inventory = await db.inventory.findUnique({
      where: {
        id: payload.inventoryId,
      },
    });

    if (!inventory) {
      throw new AppError(httpStatus.NOT_FOUND, "Blood inventory not found");
    }

    if (!inventory.isAvailable) {
      throw new AppError(httpStatus.BAD_REQUEST, "Blood unit is unavailable");
    }

    if (inventory.testStatus !== "TESTED") {
      throw new AppError(httpStatus.BAD_REQUEST, "Blood has not been tested");
    }
  }

  const result = await db.bloodRequest.create({
    data: {
      requesterId: requester.id,
      ...payload,
      status: "PENDING",
    },
  });

  return result;
};

export const availableDonorInToDB = async () => {
  const ninetyDaysAgo = new Date();

  ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

  const result = await db.user.findMany({
    where: {
      availability: true,
      isDonor: true,
      status: "ACTIVE",

      OR: [
        {
          lastDonationDate: null,
        },
        {
          lastDonationDate: {
            lte: ninetyDaysAgo,
          },
        },
      ],
    },

    select: {
      id: true,
      fullName: true,
      email: true,
      phone: true,

      bloodGroup: true,
      isDonor: true,
      city: true,
      district: true,

      profileImage: true,

      availability: true,
      lastDonationDate: true,
    },
  });

  return result;
};

export const ownRequestsInToDB = async ({
  authUser,
  page = 1,
  limit = 12,
}: GetOwnRequestsArgs): Promise<PaginatedBloodRequests> => {

  try {

    const user = await db.user.findFirst({
      where: { id: authUser.id, status: "ACTIVE" },
      select: { id: true },
    });

    if (!user) {
      throw new Error("Unauthorized: Account is inactive or missing.");
    }

    //  Calculate offset entry skip target
    const skip = (page - 1) * limit;

    // Concurrently fetch data and check if a next page exists
    // We look ahead by taking (limit + 1) items to verify if there's more data
    const requests = await db.bloodRequest.findMany({
      where: { requesterId: authUser.id },
      orderBy: { createdAt: "desc" },
      skip: skip,
      take: limit + 1,
    });

    // Determine if there are more items beyond the current limit window
    const hasMore = requests.length > limit;

    // If there's more data, slice off the extra look-ahead record
    const dataToReturn = hasMore ? requests.slice(0, limit) : requests;
    const nextPage = hasMore ? page + 1 : null;

    return {
      data: dataToReturn,
      nextPage,
    };
  } catch (error) {
    throw error;
  }
};

export const deleteOwnRequestInToDB = async ({
  requestId,
  authUser,
}: {
  requestId: string;
  authUser: TokenUser;
}): Promise<bloodRequest> => {
  try {
    // Verify existence and ownership before attempting deletion
    const existingRequest = await db.bloodRequest.findUnique({
      where: { id: requestId },
    });

    if (!existingRequest) {
      throw new Error(
        "NotFound: The requested blood record could not be found.",
      );
    }

    if (existingRequest.requesterId !== authUser.id) {
      throw new Error(
        "Unauthorized: You do not have permission to delete this request.",
      );
    }

    // 2. Perform the safe isolated deletion
    const deletedRequest = await db.bloodRequest.delete({
      where: {
        id: requestId,
      },
    });

    return deletedRequest;
  } catch (error) {
    
    throw error;
  }
};

export const DonorRequestservice = {
  createBloodRequestIntoDB,
  availableDonorInToDB,
  ownRequestsInToDB,
  deleteOwnRequestInToDB,
};
