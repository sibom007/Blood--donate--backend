import bcrypt from "bcrypt";
import config from "../../../config";
import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import { db } from "../../../utils/prisma";
import AppError from "../../Error/AppError";
import { UserStatus } from "@prisma/client";
import { loginInput } from "./auth.interface";
import { generateUserTokens, jwtHelpers } from "../../../helper/jwtHelpers";

const LoginIntoDB = async (payload: loginInput) => {
  const user = await db.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found.");
  }

  if (user.status === UserStatus.BLOCKED) {
    throw new AppError(httpStatus.FORBIDDEN, "Your account has been blocked.");
  }

  if (user.status === UserStatus.SUSPENDED) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "Your account has been suspended.",
    );
  }

  const passwordMatched = await bcrypt.compare(payload.password, user.password);

  if (!passwordMatched) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid credentials.");
  }

  const tokens = generateUserTokens({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
  });

  return {
    ...tokens,
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      bloodGroup: user.bloodGroup,
      profileImage: user.profileImage,
    },
  };
};

const refreshToken = async (refreshTokenValue: string) => {
  let decodedData;

  try {
    decodedData = jwtHelpers.verifyToken(
      refreshTokenValue,
      config.refreshToken_secret as Secret,
    );
  } catch {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid refresh token.");
  }

  const user = await db.user.findUnique({
    where: {
      email: decodedData.email,
    },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found.");
  }

  if (user.status !== UserStatus.ACTIVE) {
    throw new AppError(httpStatus.FORBIDDEN, "Account is inactive.");
  }

  const accessToken = jwtHelpers.generateToken(
    {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
    config.accesToken_secret as Secret,
    config.accesToken_secret_exparein!,
  );

  return {
    accessToken,
  };
};

interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

const ChangePassword = async (
  payload: ChangePasswordPayload,
  authUser: {
    email: string;
  },
) => {
  const user = await db.user.findUnique({
    where: {
      email: authUser.email,
    },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found.");
  }

  const oldPasswordMatched = await bcrypt.compare(
    payload.oldPassword,
    user.password,
  );

  if (!oldPasswordMatched) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Current password is incorrect.",
    );
  }

  const samePassword = await bcrypt.compare(payload.newPassword, user.password);

  if (samePassword) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "New password cannot be the same as the old password.",
    );
  }

  const hashedPassword = await bcrypt.hash(payload.newPassword, 10);

  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  return null
};



export const Authservice = {
    LoginIntoDB,
    refreshToken,
    ChangePassword,
}