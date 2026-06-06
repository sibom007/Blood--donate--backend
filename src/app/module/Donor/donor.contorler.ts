import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { DonorRequestservice } from "./donor.service";

const createRequestADonor = catchAsync(async (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Active session required",
    });
  }
  const result = await DonorRequestservice.createBloodRequestIntoDB(
    req.user,
    req.body,
  );
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Request successfully made",
    data: result,
  });
});

const availableDonor = catchAsync(async (req, res) => {
  const result = await DonorRequestservice.availableDonorInToDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "",
    data: result,
  });
});

const ownRequests = catchAsync(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 12;

  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Active session required",
    });
  }

  const result = await DonorRequestservice.ownRequestsInToDB({
    authUser: req.user,
    page,
    limit,
  });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "",
    data: result,
  });
});

const deleteOwnRequest = catchAsync(async (req, res) => {
  const { requestId } = req.params;
  
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Active session required",
    });
  }
  const result = await DonorRequestservice.deleteOwnRequestInToDB({
    requestId,
    authUser: req.user,
  });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "",
    data: result,
  });
});
export const Donorcontorler = {
  createRequestADonor,
  availableDonor,
  ownRequests,
  deleteOwnRequest,
};
