import {
  CreateBloodRequestSchema,
  RequestCancellationSchema,
} from "./request.interface";
import express from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../generated/prisma";
import { RequestControllers } from "./request.contorler";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/request",
  auth(UserRole.USER, UserRole.VOLUNTEER, UserRole.ADMIN),
  validateRequest(CreateBloodRequestSchema),
  RequestControllers.createRequest,
);

router.get(
  "/request",
  auth(UserRole.VOLUNTEER, UserRole.ADMIN),
  RequestControllers.getRequest,
);

router.get(
  "/request/:requestId",
  auth(UserRole.VOLUNTEER, UserRole.ADMIN),
  RequestControllers.getRequestById,
);

router.delete(
  "/request/:requestId",
  auth(UserRole.VOLUNTEER, UserRole.ADMIN),
  RequestControllers.deleteRequest,
);

router.patch(
  "/request/:requestId",
  auth(UserRole.VOLUNTEER, UserRole.ADMIN),
  RequestControllers.updateRequestStatus,
);

router.post(
  "/request-cancellation/:requestId",
  auth(UserRole.USER, UserRole.VOLUNTEER, UserRole.ADMIN),
  validateRequest(RequestCancellationSchema),
  RequestControllers.RequestCancellation,
);

router.get(
  "/own-requests",
  auth(UserRole.USER, UserRole.VOLUNTEER, UserRole.ADMIN),
  RequestControllers.getOwnRequests,
);

export const RequestRoutes = router;
