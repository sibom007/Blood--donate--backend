import AppError from "../../Error/AppError";
import httpStatus from "http-status";

import bcrypt from "bcrypt";
import { jwtHelpers } from "../../../helper/jwtHelpers";
import config from "../../../config";
import { Secret } from "jsonwebtoken";
import { UserStatus } from "@prisma/client";
import { ChangePasswordSchema, LoginSchema, TChangePassword, TLogin } from "./auth.interface";
import { db } from "../../../utils/prisma";

const LoginIntoDB = async (payload: TLogin) => {
  const { email, password } = LoginSchema.parse(payload);

  const userData = await db.user.findUnique({
    where: {
      email,
      status: UserStatus.ACTIVE,
    },
  });

  if (!userData) {
    throw new AppError(httpStatus.NOT_FOUND, "user not exist!");
  }

  const currentpassword = await bcrypt.compare(password, userData.password);

  if (!currentpassword) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Password is not match");
  }

  const token = jwtHelpers.generateToken(
    {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      role: userData.role,
    },
    config.accesToken_secret as Secret,
    config.accesToken_secret_exparein!,
  );

  const refreshToken = jwtHelpers.generateToken(
    {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      role: userData.role,
    },
    config.refreshToken_secret as Secret,
    config.refreshToken_secret_exparein!,
  );

  const newUser = {
    id: userData.id,
    name: userData.name,
    role: userData.role,
    bio: userData.bio,
    isAvailable: userData.isAvailable,
    createdAt: userData.createdAt,
    updatedAt: userData.updatedAt,
  };

  return { token, user: newUser, refreshToken };
};

const refreshToken = async (token: string) => {
  let decodedData;
  try {
    decodedData = jwtHelpers.verifyToken(
      token,
      config.refreshToken_secret as Secret,
    );
  } catch (err) {
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
  }

  const userData = await db.user.findUnique({
    where: {
      email: decodedData.email,
      status: UserStatus.ACTIVE,
    },
  });

  if (!userData) {
    throw new AppError(httpStatus.NOT_FOUND, "user not exist!");
  }

  const accessToken = jwtHelpers.generateToken(
    {
      email: userData.email,
      role: userData.role,
    },
    config.accesToken_secret as Secret,
    config.accesToken_secret_exparein!,
  );

  return {
    accessToken,
  };
};

const ChangePassword = async (payload: TChangePassword) => {
  const { newPassword, oldPassword, email } =
    ChangePasswordSchema.parse(payload);

  const userData = await db.user.findUnique({
    where: {
      email,
      status: UserStatus.ACTIVE,
    },
  });

  if (!userData) {
    throw new AppError(httpStatus.NOT_FOUND, "user not exist!");
  }

  const iscurrectPassword = await bcrypt.compare(
    oldPassword,
    userData.password,
  );

  if (!iscurrectPassword) {
    throw new AppError(httpStatus.BAD_REQUEST, "Password incorrect!");
  }

  const hashedPassword: string = await bcrypt.hash(
    newPassword,
    config.bcrypt_salt_rounds!,
  );

  await db.user.update({
    where: {
      email: userData.email,
    },
    data: {
      password: hashedPassword,
    },
  });

  return;
};

export const Authservice = {
  LoginIntoDB,
  refreshToken,
  ChangePassword,
};
