import bcrypt from "bcrypt";

import AppError from "../../Error/AppError";
import { db } from "../../../utils/prisma";
import config from "../../../config";
import { AuthUser } from "../Auth/auth.interface";
import { Prisma } from "../../../generated/prisma";
import httpStatus from "http-status";
import { CreateUserInput } from "./user.interface";

const createUserIntoDB = async (payload: CreateUserInput) => {
  const ExUser = await db.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (ExUser) {
    throw new AppError(400, "user already exist");
  }

  const isHashPassword = await bcrypt.hash(payload.password, 12);

  const res = await db.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      passwordHash: isHashPassword,
      profile: {
        create: {
          ...payload.profile,
          isAvailable: true,
        },
      },
    },
    select: {
      name: true,
      email: true,
      phone: true,
      bio: true,
      status: true,
      id: true,
      photoUrl: true,
      role: true,
      lastLoginAt: true,
      profile: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return res;
};

// const getMyProfileIntoDB = async (ActiveUser: AuthUser | undefined) => {
//   const result = await db.user.findUnique({
//     where: {
//       id: ActiveUser?.id,
//       isAvailable: true,
//       status: "ACTIVE",
//     },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       role: true,
//       photo: true,
//       status: true,
//       bio: true,
//       city: true,
//       latitude: true,
//       longitude: true,
//       age: true,
//       phoneNumber: true,
//       lastDonationDate: true,
//       bloodType: true,
//       createdAt: true,
//       updatedAt: true,
//     },
//   });
//   if (!result) {
//     throw new AppError(400, "User not found !");
//   }
//   return result;
// };

// const getAllProfileIntoDB = async (query: getUsersQueryInput) => {
//   const {
//     bloodType,
//     city,
//     isAvailable,
//     status,
//     minAge,
//     maxAge,
//     sortBy = "createdAt",
//     sortOrder = "desc",
//     limit = 10,
//     page = 1,
//   } = query;

//   const skip = (page - 1) * limit;

//   const filters: Prisma.UserWhereInput = {};

//   if (bloodType) {
//     filters.bloodType = bloodType;
//   }

//   if (city) {
//     filters.city = {
//       contains: city,
//       mode: "insensitive",
//     };
//   }

//   if (typeof isAvailable === "boolean") {
//     filters.isAvailable = isAvailable;
//   }

//   if (status) {
//     filters.status = status;
//   }

//   if (minAge || maxAge) {
//     filters.age = {};

//     if (minAge) filters.age.gte = minAge;
//     if (maxAge) filters.age.lte = maxAge;
//   }

//   const result = await db.user.findMany({
//     where: filters,
//     orderBy: {
//       [sortBy]: sortOrder,
//     },
//     skip,
//     take: limit,
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       role: true,
//       photo: true,
//       status: true,
//       bio: true,
//       city: true,
//       latitude: true,
//       longitude: true,
//       age: true,
//       phoneNumber: true,
//       lastDonationDate: true,
//       bloodType: true,
//       createdAt: true,
//       updatedAt: true,
//     },
//   });

//   const total = await db.user.count({
//     where: filters,
//   });

//   return {
//     meta: {
//       page,
//       limit,
//       total,
//     },
//     data: result,
//   };
// };

// const UpdateUserStatusIntoDB = async (
//   payload: UserStatusInput,
//   userId: true,
// ) => {
//   const user = await db.user.findUnique({
//     where: {
//       id: userId,
//     },
//   });

//   if (!user) {
//     throw new AppError(httpStatus.NOT_FOUND, "User not found");
//   }

//   const result = await db.user.update({
//     where: {
//       id: user.id,
//     },
//     data: {
//       status: payload.status,
//       isAvailable: payload.isAvailable,
//       tokenVersion: 1,
//     },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       role: true,
//       photo: true,
//       status: true,
//       bio: true,
//       city: true,
//       latitude: true,
//       longitude: true,
//       age: true,
//       isAvailable: true,
//       phoneNumber: true,
//       lastDonationDate: true,
//       bloodType: true,
//       createdAt: true,
//       updatedAt: true,
//     },
//   });

//   return result;
// };

// const UpdateUserDetailsIntoDB = async (
//   payload: updateUserProfileInput,
//   ActiveUser: AuthUser | undefined,
// ) => {
//   const parseData = updateUserProfileSchema.parse(payload);

//   const user = await db.user.findUnique({
//     where: {
//       id: ActiveUser?.id,
//       status: "ACTIVE",
//     },
//   });

//   if (!user) {
//     throw new AppError(httpStatus.NOT_FOUND, "User not found. inactive");
//   }

//   const result = await db.user.update({
//     where: {
//       id: user.id,
//     },
//     data: {
//       ...parseData,
//     },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       role: true,
//       photo: true,
//       status: true,
//       bio: true,
//       city: true,
//       latitude: true,
//       longitude: true,
//       age: true,
//       phoneNumber: true,
//       lastDonationDate: true,
//       bloodType: true,
//       createdAt: true,
//       updatedAt: true,
//     },
//   });

//   return result;
// };

// const UpdateUserStatusIntoDB = async (id: string, payload: string) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       id: id,
//     },
//   });
//   if (!user) {
//     throw new AppError(400, "User not Found!");
//   }

//   const result = await prisma.user.updateMany({
//     where: { id: id },
//     data: {
//       status: payload as UserStatus,
//     },
//   });
//   return result;
// };
// const UpdateUserRoleIntoDB = async (id: string, payload: string) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       id: id,
//     },
//   });
//   if (!user) {
//     throw new AppError(400, "User not Found!");
//   }

//   const result = await prisma.user.updateMany({
//     where: { id: id },
//     data: {
//       role: payload as Role,
//     },
//   });
//   return result;
// };

export const userservise = {
  createUserIntoDB,
  // getMyProfileIntoDB,
  // getAllProfileIntoDB,
  // UpdateUserStatusIntoDB,
  // UpdateUserDetailsIntoDB,
};
