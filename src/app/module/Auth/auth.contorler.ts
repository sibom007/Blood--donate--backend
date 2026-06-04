import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';

import { Request, Response } from 'express';
import ms from "ms";
import { Tokenduration } from "./auth.interface";
import { Authservice } from './auth.service';

const LoginUser = catchAsync(async (req, res) => {
  const {accessToken,refreshToken,user} = await Authservice.LoginIntoDB(req.body);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: ms(Tokenduration),
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully",
    data: {
      user,accessToken
    },
  });
});

const logout = catchAsync(async (req, res) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "logout successfully!",
    data: "done",
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await Authservice.refreshToken(refreshToken);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Logged in successfully!",
    data: result,
  });
});
const changepassword = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const user = req.user;
    const passwords = req.body;
    const result = await Authservice.ChangePassword(passwords, user);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Password Change successfully!",
      data: result,
    });
  },
);

export const AuthControllers = {
  LoginUser,
  refreshToken,
  changepassword,
  logout,
};
