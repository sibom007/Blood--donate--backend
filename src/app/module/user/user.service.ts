
import { CreateUserInput, IPaginationOptions } from "./user.interface";
import { paginationHelper } from "../../../helper/paginationHelper";
import { userSearchAbleFields } from "./user.constant";
import bcrypt from "bcrypt";
import AppError from "../../Error/AppError";
import httpStatus from "http-status";
import { db } from "../../../utils/prisma";

const createUserIntoDB = async (payload: CreateUserInput) => {
  // 1. Check if user already exists
  const existingUser = await db.user.findUnique({
    where: { email: payload.email },
  });

  if (existingUser) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "A user with this email already exists.",
    );
  }

  // 2. Hash password safely (12 rounds takes ~250ms; secure yet fast)
  const hashedPassword = await bcrypt.hash(payload.password!, 10);

  // 3. Create the user in the database
  const result = await db.user.create({
    data: {
      ...payload,
      password: hashedPassword,
      role: "USER",
      age: Number(payload.age),
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      bloodType: true,
      location: true,
      availability: true,
      bio: true,
      age: true,
      lastDonationDate: true,
      createdAt: true,
    },
  });
  console.log("🚀 ~ createUserIntoDB ~ result:", result);

  return result;
};

const getdonorUserIntoDB = async (params: any, options: IPaginationOptions) => {
  const { searchTerm, ...filterData } = params;
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const andCondions = [];

  if (params.searchTerm) {
    andCondions.push({
      OR: userSearchAbleFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andCondions.push({
      AND: Object.keys(filterData).map((key) => {
        let value = filterData[key];
        if (key === "availability" && typeof value === "string") {
          value = value === "true";
        }

        return {
          [key]: {
            equals: value,
          },
        };
      }),
    });
  }

  const whereConditons = andCondions.length > 0 ? { AND: andCondions } : {};
  const result = await db.user.findMany({
    where: whereConditons,
    skip,
    take: limit,
    orderBy:
      options.sortBy &&
      (options.sortOrder === "asc" || options.sortOrder === "desc")
        ? options.sortBy === "age" || options.sortBy === "lastDonationDate"
          ? {
              profile: {
                ...(options.sortBy === "age" && { age: options.sortOrder }),
                ...(options.sortBy === "lastDonationDate" && {
                  lastDonationDate: options.sortOrder,
                }),
              },
            }
          : {
              [options.sortBy]: options.sortOrder,
            }
        : {
            createdAt: "desc",
          },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      location: true,
      bloodType: true,
      availability: true,
      createdAt: true,
      updatedAt: true,
      profile: {
        select: {
          id: true,
          userId: true,
          bio: true,
          age: true,
          lastDonationDate: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  const total = await db.user.count({
    where: whereConditons,
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getUserProfileIntoDB = async (payload) => {
  console.log("🚀 ~ getUserProfileIntoDB ~ payload:", payload);

  const result = await db.user.findFirst({
    where: {
      id: payload.email,
    },
  });

  return result;
};

const UpdateUserProfileIntoDB = async (user, payload) => {
  return "result";
};

export const userservise = {
  createUserIntoDB,
  getdonorUserIntoDB,
  getUserProfileIntoDB,
  UpdateUserProfileIntoDB,
};
