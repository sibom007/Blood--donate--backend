import bcrypt from "bcrypt";
import httpStatus from "http-status";
import config from "../../../config";
import { Secret } from "jsonwebtoken";

import AppError from "../../Error/AppError";
import { loginInput } from "./auth.interface";
import { CustomJwtPayload, jwtHelpers } from "../../../helper/jwtHelpers";
import { db } from "../../../utils/prisma";
import { UserStatus } from "../../../generated/prisma";

const LoginIntoDB = async (payload: loginInput) => {
  const existingUser = await db.user.findUnique({
    where: { email: payload.email },
  });

  if (!existingUser) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "A user with this email dose not exists.",
    );
  }
  const currentpassword = await bcrypt.compare(
    payload.password,
    existingUser.password,
  );

  if (!currentpassword) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Password is not match");
  }

  const token = jwtHelpers.generateToken(
    {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      role: existingUser.role,
    },
    config.accesToken_secret as Secret,
    config.accesToken_secret_exparein!,
  );

  const refreshToken = jwtHelpers.generateToken(
    {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      role: existingUser.role,
    },
    config.refreshToken_secret as Secret,
    config.refreshToken_secret_exparein!,
  );

  return {
    token,
    refreshToken,
    user: {
      id: existingUser.id,
      email: existingUser.email,
    },
  };
};

const refreshToken = async (token: string) => {
  let decodedData: CustomJwtPayload;
  try {
    decodedData = jwtHelpers.verifyToken(token, config.refreshToken_secret!);
  } catch (err) {
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
  }

  const userData = await db.user.findUniqueOrThrow({
    where: {
      email: decodedData.email,
      status: UserStatus.ACTIVE,
    },
  });

  const accessToken = jwtHelpers.generateToken(
    {
      id: userData.id,
      email: userData.email,
      name: userData.name,
      role: userData.role,
    },
    config.accesToken_secret as Secret,
    config.accesToken_secret_exparein!,
  );

  return {
    accessToken,
  };
};

const ChangePassword = async (payload: any, user: any) => {
  const userData = await db.user.findUniqueOrThrow({
    where: {
      email: user.email,
      status: UserStatus.ACTIVE,
    },
  });

  const iscurrectPassword = await bcrypt.compare(
    payload.oldPassword,
    userData?.password,
  );

  if (!iscurrectPassword) {
    throw new AppError(httpStatus.BAD_REQUEST, "Password incorrect!");
  }

  const hashedPassword: string = await bcrypt.hash(payload.newPassword, 12);

  await db.user.update({
    where: {
      email: userData.email,
    },
    data: {
      password: hashedPassword,
    },
  });

  return null;
};



export const Authservice = {
    LoginIntoDB,
    refreshToken,
    ChangePassword,
}