import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { DonorRequestservice } from "./donor.service";

const createRequestADonor = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await DonorRequestservice.DonorRequestIntoDB(user, req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Request successfully made",
    data: result,
  });
});

const GetmyRequestofDonor = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await DonorRequestservice.GetmyDonorRequestIntoDB(user);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Donation requests retrieved successfully",
    data: result,
  });
});
const GivienRequestofDonor = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await DonorRequestservice.GivenRequestofDonorIntoDB(user);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Donation requests retrieved successfully",
    data: result,
  });
});

const UpdateRequestofDonor = catchAsync(async (req, res) => {
  const UpdatData = req.body;
  const id = req.params.requestId;
  const result = await DonorRequestservice.UpdateDonorRequestIntoDB(
    id,
    UpdatData
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Donation request status successfully updated",
    data: result,
  });
});

export const Donorcontorler = {
  createRequestADonor,
  GivienRequestofDonor,
  GetmyRequestofDonor,
  UpdateRequestofDonor,
};