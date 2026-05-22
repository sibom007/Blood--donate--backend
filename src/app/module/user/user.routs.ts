import express from 'express';

import auth from "../../middlewares/auth";
import { UserControllers } from "./user.contorler";
import { createUserSchema } from "./user.interface";
import validateRequest from "../../middlewares/validateRequest";
import { Role } from "../../../generated/prisma";

const router = express.Router();

router.post(
  "/register",
  validateRequest(createUserSchema),
  UserControllers.createUser,
);

router.get(
  '/donor-list',
  UserControllers.getdonorUser
);
router.put(
  '/my-profile',
  auth(Role.USER, Role.ADMIN),
  UserControllers.updateUserProfile
);
router.get(
  '/my-profile',
  auth(Role.USER, Role.ADMIN),
  UserControllers.getUserProfile
);


export const UserRoutes = router;
