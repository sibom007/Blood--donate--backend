import express from 'express';

import validateRequest from '../../middlewares/validateRequest';

import { UserControllers } from "./user.contorler";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../generated/prisma";
import { createUserSchema } from './user.interface';

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(createUserSchema),
  UserControllers.createUser,
);


// router.get(
//   "/my-profile",
//   auth(UserRole.USER, UserRole.VOLUNTEER, UserRole.ADMIN),
//   UserControllers.getMyProfile,
// );

// router.get("/all-profile", auth(UserRole.ADMIN), UserControllers.getAllProfile);

// router.patch(
//   "/update-user/:userId",
//   auth(UserRole.ADMIN),
//   validateRequest(UserStatusSchema),
//   UserControllers.UpdateUserStatus,
// );
// router.patch(
//   "/update-myDetails",
//   auth(UserRole.USER, UserRole.VOLUNTEER, UserRole.ADMIN),
//   validateRequest(updateUserProfileSchema),
//   UserControllers.UpdateUserDetails,
// );



export const UserRoutes = router;
