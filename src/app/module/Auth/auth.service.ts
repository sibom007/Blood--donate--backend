import bcrypt from "bcrypt";
import httpStatus from "http-status";
import config from "../../../config";
import { Secret } from "jsonwebtoken";
import AppError from "../../Error/AppError";
import { db } from "../../../utils/prisma";
import { jwtHelpers } from "../../../helper/jwtHelpers";
import { UserStatus } from "../../../generated/prisma";
import { AuthUser, ChangePasswordSchema, LoginSchema,
   TChangePasswordInput, TLoginInput } from "./auth.interface";


const LoginIntoDB = async (payload: TLoginInput) => {

  const { email, password } = LoginSchema.parse(payload);

  const userData = await db.user.findUnique({
    where: {
      email,
      status: UserStatus.ACTIVE,
    },
    include:{
      profile:true
    }
  });

  if (!userData) {
    throw new AppError(httpStatus.NOT_FOUND, "user not exist!");
  }

  const currentpassword = await bcrypt.compare(password, userData.passwordHash);

  if (!currentpassword) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Password is not match");
  }

  const accessToken = jwtHelpers.generateToken(
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
    isAvailable: userData.profile?.isAvailable,
    createdAt: userData.createdAt,
    updatedAt: userData.updatedAt,
  };

  return { accessToken, user: newUser, refreshToken };
};

const RefreshToken = async (refreshToken: string) => {
  if (!refreshToken) {
    throw new AppError(httpStatus.UNAUTHORIZED, "unauthorised");
  }

  let decodedData

  try {
    decodedData = jwtHelpers.verifyToken(
      refreshToken,
      config.refreshToken_secret as Secret,
    );
  } catch {
    throw new AppError(httpStatus.UNAUTHORIZED, "INVALID_REFRESH_TOKEN");
  }

  const userData = await db.user.findUnique({
    where: {
      email: decodedData.email,
     
    },
    include:{
      profile:{
        select:{
          isAvailable:true
        }
      }
    }
  });

  if (!userData) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  if (userData.status !== UserStatus.ACTIVE) {
    throw new AppError(httpStatus.UNAUTHORIZED, "User is inactive");
  }

  // generate new access token
  const accessToken = jwtHelpers.generateToken(
    {
      id: userData.id,
      name:userData.name,
      role: userData.role,
      email: userData.email,
    },
    config.accesToken_secret as Secret,
    config.accesToken_secret_exparein!,
  );

  return {
    accessToken,
    user: {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      role: userData.role,
      isAvailable: userData.profile?.isAvailable,
    },
  };
};

const ChangePassword = async (payload: TChangePasswordInput) => {
  const { newPassword, oldPassword, email } =
    ChangePasswordSchema.parse(payload);

  const userData = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!userData) {
    throw new AppError(httpStatus.NOT_FOUND, "user not exist!");
  }
  
  if (userData.status !== UserStatus.ACTIVE) {
    throw new AppError(httpStatus.UNAUTHORIZED, "User is inactive");
  }

  const isCurrectPassword = await bcrypt.compare(
    oldPassword,
    userData.passwordHash,
  );

  if (!isCurrectPassword) {
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
      passwordHash: hashedPassword,
    },
  });

  return null;
};

export const Authservice = {
  LoginIntoDB,
  RefreshToken,
  ChangePassword,
};
