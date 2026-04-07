import express from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../generated/prisma";
import { DonorControllers } from "./donor.contorler";

const router = express.Router();

router.get(
  "/assignments",
  auth(UserRole.VOLUNTEER, UserRole.ADMIN),
  DonorControllers.getAssignments,
);

router.get(
  "/donor-assignments",
  auth(UserRole.USER, UserRole.VOLUNTEER, UserRole.ADMIN),
  DonorControllers.getDonorAssignments,
);

router.patch(
  "/donor-assignment/:assignmentId",
  auth(UserRole.USER, UserRole.VOLUNTEER, UserRole.ADMIN),
  DonorControllers.updateDonorAssignments,
);

export const DonorRoutes = router;
