import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import { RequestService } from "./request.service";
import sendResponse from "../../../utils/sendResponse";
import { BloodRequestStatusInput } from "./request.interface";

const createRequest = catchAsync(async (req, res) => {
  const result = await RequestService.createRequestInToDB(req.user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Request create successfully!",
    data: result,
  });
});

const getRequest = catchAsync(async (req, res) => {
  const result = await RequestService.getRequestInToDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "",
    data: result,
  });
});

const getRequestById = catchAsync(async (req, res) => {
  const { requestId } = req.params;
  const result = await RequestService.getRequestByIdInToDB(requestId as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "",
    data: result,
  });
});
const deleteRequest = catchAsync(async (req, res) => {
  const { requestId } = req.params;
  const result = await RequestService.deleteRequestInToDB(requestId as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "The Request delete successfully",
    data: result,
  });
});

const updateRequestStatus = catchAsync(async (req, res) => {
  const { requestId } = req.params;

  const result = await RequestService.updateRequestStatusInToDB(
    requestId as string,
    req.query as BloodRequestStatusInput,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Status update successfully!",
    data: result,
  });
});

const RequestCancellation = catchAsync(async (req, res) => {
  const { requestId } = req.params;

  const result = await RequestService.requestForCancellationInToDB(
    requestId as string,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Request send successfully!",
    data: result,
  });
});

const getOwnRequests = catchAsync(async (req, res) => {
  const result = await RequestService.getOwnRequestsInToDB(req.user, req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "",
    data: result,
  });
});

export const RequestControllers = {
  createRequest,
  getRequest,
  getRequestById,
  deleteRequest,
  updateRequestStatus,
  RequestCancellation,
  getOwnRequests,
};
