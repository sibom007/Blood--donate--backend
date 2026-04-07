import httpStatus from "http-status";
import { DonorService } from "./donor.service";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { AssignmentStatus, Urgency } from "../../../generated/prisma";
import {
  GetDonorAssignmentsInput,
  getDonorAssignmentsQuerySchema,
} from "./donor.interface";

const getAssignments = catchAsync(async (req, res) => {
  const { status } = req.query;
  const result = await DonorService.getAssignmentsInToDB(
    status as AssignmentStatus,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "",
    data: result,
  });
});

const getDonorAssignments = catchAsync(async (req, res) => {
  const validQuery = getDonorAssignmentsQuerySchema.parse(req.query);
  const result = await DonorService.getDonorAssignmentsInToDB(
    req.user,
    validQuery,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "",
    data: result,
  });
});

const updateDonorAssignments = catchAsync(async (req, res) => {
  const { assignmentId } = req.params;
  const result = await DonorService.updateDonorAssignmentsInToDB(
    req.user,
    assignmentId,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "",
    data: result,
  });
});



export const DonorControllers = {
  getAssignments,
  getDonorAssignments,
  updateDonorAssignments,
};
