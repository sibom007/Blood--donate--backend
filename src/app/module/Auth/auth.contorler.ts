import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { Authservice } from './auth.service';


const LoginUser = catchAsync(async (req, res) => {
  const result = await Authservice.LoginIntoDB(req.body);

 res.cookie("refreshToken", refreshToken, {
   httpOnly: true,
   secure: process.env.NODE_ENV === "production",
   sameSite: "none",
 });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully",
    data: result,
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

const changepassword = catchAsync(async (req, res) => {
  const result = await Authservice.ChangePassword(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Password Change successfully!",
    data: result,
  });
});


export const AuthControllers = {
    LoginUser,
    refreshToken,
    changepassword
};
