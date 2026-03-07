import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { DonorRequestservice } from "./donor.service";

const createRequest = catchAsync(async (req, res) => {
  const result = await DonorRequestservice.RequestForBloodIntoDB(req.user, req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Request successfully made",
    data: result,
  });
});

const RequestView = catchAsync(async (req, res) => {
  const result = await DonorRequestservice.RequestViewInToDB(req.user);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Donation requests retrieved successfully",
    data: result,
  });
});

const AllRequestView = catchAsync(async (req, res) => {
  const result = await DonorRequestservice.AllRequestViewInToDB(req.user);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "requests retrieved successfully",
    data: result,
  });
});

const RequestDetails = catchAsync(async (req, res) => {
const { requestId }=req.params
  const result = await DonorRequestservice.RequestDetailsInToDB(req.user,requestId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "request Details retrieved successfully",
    data: result,
  });
});
const UpdateRequest = catchAsync(async (req, res) => {
  const result = await DonorRequestservice.UpdateRequestInToDB(
    req.user,
    req.body,
    req.params
  .requestId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Update successfully",
    data: result,
  });
});

const DeleteRequest = catchAsync(async (req, res) => {
  const result = await DonorRequestservice.DeleteRequestInToDB(
    req.user,
    req.params.requestId,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Delete successfully",
    data: result,
  });
});

// const GivienRequestofDonor = catchAsync(async (req, res) => {
//   const user = req.user;
//   const result = await DonorRequestservice.GivenRequestofDonorIntoDB(user);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Donation requests retrieved successfully",
//     data: result,
//   });
// });

// const UpdateRequestofDonor = catchAsync(async (req, res) => {
//   const UpdatData = req.body;
//   const id = req.params.requestId;
//   const result = await DonorRequestservice.UpdateDonorRequestIntoDB(
//     id,
//     UpdatData
//   );
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Donation request status successfully updated",
//     data: result,
//   });
// });

export const Donorcontorler = {
  createRequest,
  RequestView,
  AllRequestView,
  RequestDetails,
  UpdateRequest,
  DeleteRequest,
  //   GivienRequestofDonor,
  //   GetmyRequestofDonor,
  //   UpdateRequestofDonor,
};