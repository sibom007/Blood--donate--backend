import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import {
  CreateUserSchema,
  updateUserProfileSchema,
  UserStatusSchema,
} from "./user.interface";
import { UserControllers } from "./user.contorler";
import auth from "../../middlewares/auth";
import { Role } from "../../../generated/prisma";

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(CreateUserSchema),
  UserControllers.createUser,
);

router.get(
  "/my-profile",
  auth(Role.USER, Role.VOLUNTEER, Role.ADMIN),
  UserControllers.getMyProfile,
);

router.get("/all-profile", auth(Role.ADMIN), UserControllers.getAllProfile);

router.patch(
  "/update-user/:userId",
  auth(Role.ADMIN),
  validateRequest(UserStatusSchema),
  UserControllers.UpdateUserStatus,
);
router.patch(
  "/update-myDetails",
  auth(Role.USER, Role.VOLUNTEER, Role.ADMIN),
  validateRequest(updateUserProfileSchema),
  UserControllers.UpdateUserDetails,
);



export const UserRoutes = router;
