import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { InventoryService } from "./inventory.service";

const createBloodInInventory = catchAsync(async (req, res) => {
  const result = await InventoryService.createBloodIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "create successfully",
    data: result,
  });
});

const availableBlood = catchAsync(async (req, res) => {
  const result = await InventoryService.availableBloodInToDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "",
    data: result,
  });
});

export const InventoryContorler = {
  createBloodInInventory,
  availableBlood,
};
