import bcrypt from 'bcrypt';
import config from "../../../config";
import prisma from '../../../utils/prisma';
import {
  BloodGroup,
  Prisma,
  Role,
  UserProfile,
  UserStatus,
} from "@prisma/client";
import { IPaginationOptions, TUser } from "./user.interface";
import { paginationHelper } from "../../../helper/paginationHelper";
import { userSearchAbleFields } from "./user.constant";
import { TToken } from "../Auth/auth.interface";
import AppError from "../../Error/AppError";

const createUserIntoDB = async (payload: TUser) => {
  const UserData = {
    name: payload.name,
    email: payload.email,
    password: await bcrypt.hash(
      payload.password,
      Number(config.bcrypt_salt_rounds)
    ),
    role: (payload.role as Role) || Role.USER,
    bloodType: payload.bloodType as BloodGroup,
    location: payload.location,
    donateBlood: payload.donateBlood,
    photo: payload.photo,
  };

  const email = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (email) {
    throw new AppError(400, "Email already exist");
  }

  const result = await prisma.$transaction(async (TC) => {
    const user = await TC.user.create({
      data: UserData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        photo: true,
        bloodType: true,
        location: true,
        donateBlood: true,
      },
    });
    const userProfile = await TC.userProfile.create({
      data: {
        userId: user.id,
        bio: payload.bio,
        age: payload.age,
        lastDonationDate: payload.lastDonationDate,
      },
    });
    return { user, userProfile };
  });
  return result;
};

const getdonorUserIntoDB = async (params: any, options: IPaginationOptions) => {
  const { searchTerm, ...filterData } = params;
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const andCondions: Prisma.UserWhereInput[] = [];

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

  const whereConditons: Prisma.UserWhereInput =
    andCondions.length > 0 ? { AND: andCondions } : {};
  const result = await prisma.user.findMany({
    where: { ...whereConditons, donateBlood: "YES" },
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
      donateBlood: true,
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

  const total = await prisma.user.count({
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

const getSingleDonnerIntoDB = async (payload: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id: payload,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      photo: true,
      status: true,
      location: true,
      bloodType: true,
      availability: true,
      createdAt: true,
      updatedAt: true,
      profile: true,
    },
  });
  if (!result) {
    throw new AppError(400, "User not found !");
  }
  return result;
};

type TUSer = {
  id: string;
  name: string;
  email: string;
  role: string;
};

const getUserProfileIntoDB = async (payload: TUSer) => {
  const result = await prisma.user.findUnique({
    where: {
      id: payload.id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      photo: true,
      bloodType: true,
      location: true,
      donateBlood: true,
      status: true,
      availability: true,
      createdAt: true,
      updatedAt: true,
      profile: true,
    },
  });
  return result;
};
const getUserIdIntoDB = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      photo: true,
      bloodType: true,
      location: true,
      donateBlood: true,
      status: true,
      availability: true,
      createdAt: true,
      updatedAt: true,
      profile: true,
    },
  });
  return result;
};

const UpdateUserProfileIntoDB = async (
  user: TToken,
  payload: Partial<UserProfile>
) => {
  const result = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      profile: {
        update: {
          bio: payload.bio,
          age: payload.age,
          lastDonationDate: payload.lastDonationDate,
        },
      },
    },
    select: {
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
  return result;
};

const GetAllUserIntoDB = async () => {
  const user = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      bloodType: true,
      location: true,
      donateBlood: true,
      profile: true,
      status: true,
      availability: true,
    },
  });
  return user;
};

const UpdateUserStatusIntoDB = async (id: string, payload: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!user) {
    throw new AppError(400, "User not Found!");
  }

  const result = await prisma.user.updateMany({
    where: { id: id },
    data: {
      status: payload as UserStatus,
    },
  });
  return result;
};
const UpdateUserRoleIntoDB = async (id: string, payload: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!user) {
    throw new AppError(400, "User not Found!");
  }

  const result = await prisma.user.updateMany({
    where: { id: id },
    data: {
      role: payload as Role,
    },
  });
  return result;
};

export const userservise = {
  createUserIntoDB,
  getdonorUserIntoDB,
  getUserProfileIntoDB,
  UpdateUserProfileIntoDB,
  getSingleDonnerIntoDB,
  GetAllUserIntoDB,
  UpdateUserStatusIntoDB,
  UpdateUserRoleIntoDB,
  getUserIdIntoDB,
};
