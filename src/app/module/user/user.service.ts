import { CreateUserInput } from "./user.interface";
import bcrypt from "bcrypt";

import AppError from "../../Error/AppError";
import { db } from "../../../utils/prisma";
import config from "../../../config";

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
    data: { ...payload, password: isHashPassword },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  return res;
};

// const getdonorUserIntoDB = async (params: any, options: IPaginationOptions) => {
//   const { searchTerm, ...filterData } = params;
//   const { page, limit, skip } = paginationHelper.calculatePagination(options);
//   const andCondions: Prisma.UserWhereInput[] = [];

//   if (params.searchTerm) {
//     andCondions.push({
//       OR: userSearchAbleFields.map((field) => ({
//         [field]: {
//           contains: params.searchTerm,
//           mode: "insensitive",
//         },
//       })),
//     });
//   }

//   if (Object.keys(filterData).length > 0) {
//     andCondions.push({
//       AND: Object.keys(filterData).map((key) => {
//         let value = filterData[key];
//         if (key === "availability" && typeof value === "string") {
//           value = value === "true";
//         }

//         return {
//           [key]: {
//             equals: value,
//           },
//         };
//       }),
//     });
//   }

//   const whereConditons: Prisma.UserWhereInput =
//     andCondions.length > 0 ? { AND: andCondions } : {};
//   const result = await prisma.user.findMany({
//     where: { ...whereConditons, donateBlood: "YES" },
//     skip,
//     take: limit,
//     orderBy:
//       options.sortBy &&
//       (options.sortOrder === "asc" || options.sortOrder === "desc")
//         ? options.sortBy === "age" || options.sortBy === "lastDonationDate"
//           ? {
//               profile: {
//                 ...(options.sortBy === "age" && { age: options.sortOrder }),
//                 ...(options.sortBy === "lastDonationDate" && {
//                   lastDonationDate: options.sortOrder,
//                 }),
//               },
//             }
//           : {
//               [options.sortBy]: options.sortOrder,
//             }
//         : {
//             createdAt: "desc",
//           },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       role: true,
//       status: true,
//       location: true,
//       bloodType: true,
//       donateBlood: true,
//       availability: true,
//       createdAt: true,
//       updatedAt: true,
//       profile: {
//         select: {
//           id: true,
//           userId: true,
//           bio: true,
//           age: true,
//           lastDonationDate: true,
//           createdAt: true,
//           updatedAt: true,
//         },
//       },
//     },
//   });

//   const total = await prisma.user.count({
//     where: whereConditons,
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

// const getSingleDonnerIntoDB = async (payload: string) => {
//   const result = await prisma.user.findUnique({
//     where: {
//       id: payload,
//     },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       role: true,
//       photo: true,
//       status: true,
//       location: true,
//       bloodType: true,
//       availability: true,
//       createdAt: true,
//       updatedAt: true,
//       profile: true,
//     },
//   });
//   if (!result) {
//     throw new AppError(400, "User not found !");
//   }
//   return result;
// };

// type TUSer = {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
// };

// const getUserProfileIntoDB = async (payload: TUSer) => {
//   const result = await prisma.user.findUnique({
//     where: {
//       id: payload.id,
//     },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       role: true,
//       photo: true,
//       bloodType: true,
//       location: true,
//       donateBlood: true,
//       status: true,
//       availability: true,
//       createdAt: true,
//       updatedAt: true,
//       profile: true,
//     },
//   });
//   return result;
// };
// const getUserIdIntoDB = async (id: string) => {
//   const result = await prisma.user.findUnique({
//     where: {
//       id: id,
//     },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       role: true,
//       photo: true,
//       bloodType: true,
//       location: true,
//       donateBlood: true,
//       status: true,
//       availability: true,
//       createdAt: true,
//       updatedAt: true,
//       profile: true,
//     },
//   });
//   return result;
// };

// const UpdateUserProfileIntoDB = async (
//   user: TToken,
//   payload: Partial<UserProfile>
// ) => {
//   const result = await prisma.user.update({
//     where: {
//       id: user.id,
//     },
//     data: {
//       profile: {
//         update: {
//           bio: payload.bio,
//           age: payload.age,
//           lastDonationDate: payload.lastDonationDate,
//         },
//       },
//     },
//     select: {
//       profile: {
//         select: {
//           id: true,
//           userId: true,
//           bio: true,
//           age: true,
//           lastDonationDate: true,
//           createdAt: true,
//           updatedAt: true,
//         },
//       },
//     },
//   });
//   return result;
// };

// const GetAllUserIntoDB = async () => {
//   const user = await prisma.user.findMany({
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       role: true,
//       bloodType: true,
//       location: true,
//       donateBlood: true,
//       profile: true,
//       status: true,
//       availability: true,
//     },
//   });
//   return user;
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
  // getdonorUserIntoDB,
  // getUserProfileIntoDB,
  // UpdateUserProfileIntoDB,
  // getSingleDonnerIntoDB,
  // GetAllUserIntoDB,
  // UpdateUserStatusIntoDB,
  // UpdateUserRoleIntoDB,
  // getUserIdIntoDB,
};
