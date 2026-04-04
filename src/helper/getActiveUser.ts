import httpStatus from "http-status";
import { db } from "../utils/prisma";
import AppError from "../app/Error/AppError";

export const getActiveUser = async (email: string) => {
  const user = await db.user.findFirst({
    where: {
      email,
      status: "ACTIVE",
      profile: {
        isAvailable: true,
      },
    },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found or inactive");
  }

  return user;
};
