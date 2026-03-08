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
// const getdonorUser = catchAsync(async (req, res) => {
//   const filters = pick(req.query, userFilterableFields);
//   const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
//   const result = await userservise.getdonorUserIntoDB(filters, options);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Donors successfully found",
//     data: result,
//   });
// });

// const getUserProfile = catchAsync(async (req, res) => {
//   const result = await userservise.getUserProfileIntoDB(req.user);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Profile retrieved successfully",
//     data: result,
//   });
// });
// const getUserBYId = catchAsync(async (req, res) => {
//   const result = await userservise.getUserIdIntoDB(req.params.id);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Profile retrieved successfully",
//     data: result,
//   });
// });

// const GetAllUser = catchAsync(async (req, res) => {
//   const result = await userservise.GetAllUserIntoDB();
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "User get successfully",
//     data: result,
//   });
// });

// const UpdateUserStatus = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;
//   const result = await userservise.UpdateUserStatusIntoDB(id, status);

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Update successfully",
//     data: result,
//   });
// });
// const UpdateUserRoleStatus = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const { role } = req.body;
//   const result = await userservise.UpdateUserRoleIntoDB(id, role);

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Update successfully",
//     data: result,
//   });
// });

export const UserControllers = {
  createUser,
  getMyProfile,
  getAllProfile,
  UpdateUserStatus,
  UpdateUserDetails,
};
