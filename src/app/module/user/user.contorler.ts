import { clearAuthCookies } from "../../../helper/clearAuthCookies";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { userservise } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const result = await userservise.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

const getMyProfile = catchAsync(async (req, res) => {
  const result = await userservise.getMyProfileIntoDB(req.user);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Profile retrieved successfully",
    data: result,
  });
});

const getAllProfile = catchAsync(async (req, res) => {
  const query = req.query;

  const result = await userservise.getAllProfileIntoDB(query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Profile retrieved successfully",
    data: result,
  });
});

const UpdateUserStatus = catchAsync(async (req, res) => {
  const result = await userservise.UpdateUserStatusIntoDB(
    req.body,
    req.params.userId,
  );

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User profile status updated successfully",
    data: result,
  });
});

const UpdateUserDetails = catchAsync(async (req, res) => {
  const result = await userservise.UpdateUserDetailsIntoDB(req.body, req.user);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User profile updated successfully",
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getMyProfile,
  getAllProfile,
  UpdateUserStatus,
  UpdateUserDetails,
};
