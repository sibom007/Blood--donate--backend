import httpStatus from "http-status";
import { db } from "../utils/prisma";
import AppError from "../app/Error/AppError";

export const getActiveUser = async (email: string | undefined) => {
  const user = await db.user.findFirst({
    where: {
      email,
      status: "ACTIVE",
      isAvailable: true,
    },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found or inactive");
  }

  return user;
};
