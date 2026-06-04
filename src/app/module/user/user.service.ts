import bcrypt from 'bcrypt';
import { db } from "../../../utils/prisma";
import AppError from "../../Error/AppError";
import httpStatus from "http-status";
import { CreateUserInput } from "./user.interface";

const createUserIntoDB = async (payload: CreateUserInput) => {
  const existingUser = await db.user.findFirst({
    where: {
      OR: [{ email: payload.email }, { phone: payload.phone }],
    },
  });

  if (existingUser) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "User already exists with this email or phone number.",
    );
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const result = await db.user.create({
    data: {
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      password: hashedPassword,

      bloodGroup: payload.bloodGroup,
      gender: payload.gender,
      age: payload.age,

      address: payload.address,
      city: payload.city,
      district: payload.district,

      profileImage: payload.profileImage,
      bio: payload.bio,

      isDonor: payload.isDonor ?? true,
      availability: payload.availability ?? true,
      weight: payload.weight,

      role: "USER",
      status: "ACTIVE",
    },

    select: {
      id: true,
      fullName: true,
      email: true,
      phone: true,

      bloodGroup: true,
      gender: true,
      age: true,

      city: true,
      district: true,

      profileImage: true,
      bio: true,

      isDonor: true,
      availability: true,
      weight: true,

      role: true,
      status: true,
      emailVerified: true,

      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};

export const userservise = {
  createUserIntoDB,

};
