import AppError from "../../Error/AppError";
import httpStatus from "http-status";
import { db } from "../../../utils/prisma";
import { TokenUser } from "../auth/auth.interface";
import { CreateBloodRequestInput } from "./donor.interface";

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

export const DonorRequestservice = {
  createBloodRequestIntoDB,
  availableDonorInToDB,
};
