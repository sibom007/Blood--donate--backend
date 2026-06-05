import { db } from "../../../utils/prisma";
import { BloodGroup } from "@prisma/client";
import { CreateInventoryInput } from "./inventory.interface";
import AppError from "../../Error/AppError";
import httpStatus from "http-status";
import { calculateTestStatus } from "../../../utils/calculateTestStatus";

const createBloodIntoDB = async (payload: CreateInventoryInput) => {
  try {
    return db.$transaction(async (tx) => {
      // Prevent duplicate bag numbers
      const existingBag = await tx.inventory.findUnique({
        where: {
          bagNumber: payload.bagNumber,
        },
      });

      if (existingBag) {
        throw new AppError(
          httpStatus.CONFLICT,
          `Blood bag ${payload.bagNumber} already exists`,
        );
      }

      // donor validation
      if (
        (payload.donorId && !payload.donorName) ||
        (!payload.donorId && payload.donorName)
      ) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          "Donor ID and donor name must be provided together",
        );
      }

      const testResults = [
        payload.hivTest,
        payload.hepatitisBTest,
        payload.hepatitisCTest,
        payload.malariaTest,
        payload.syphilisTest,
      ];

      const testStatus = calculateTestStatus(testResults);

      const isExpired = payload.expiryDate <= new Date();

      const isAvailable = !isExpired && testStatus === "TESTED";

      return tx.inventory.create({
        data: {
          ...payload,

          donorId: payload.donorId || null,
          donorName: payload.donorName || null,

          testStatus,
          isAvailable,
        },
      });
    });
  } catch (error) {
    return error
  }
};

const availableBloodInToDB = async (bloodGroup?: BloodGroup) => {
  const now = new Date();

  try {
    const result = await db.inventory.findMany({
      where: {
        ...(bloodGroup && {
          bloodGroup,
        }),

        isAvailable: true,

        expiryDate: {
          gt: now,
        },

        testStatus: "TESTED",

        hivTest: "NEGATIVE",
        hepatitisBTest: "NEGATIVE",
        hepatitisCTest: "NEGATIVE",
        malariaTest: "NEGATIVE",
        syphilisTest: "NEGATIVE",
      },

      orderBy: {
        expiryDate: "asc",
      },
    });

    return result;
  } catch (error) {
    return error;
  }
};

export const InventoryService = {
  createBloodIntoDB,
  availableBloodInToDB,
};
