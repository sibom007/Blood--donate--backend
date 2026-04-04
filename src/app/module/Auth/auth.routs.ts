import express from 'express';
import auth from "../../middlewares/auth";
import { AuthControllers } from "./auth.contorler";
import { UserRole } from "../../../generated/prisma";

const router = express.Router();

router.post("/login", AuthControllers.LoginUser);

router.post("/refresh-token", AuthControllers.refreshToken);

router.post("/logout", AuthControllers.logout);

router.post(
  "/change-password",
  auth(UserRole.USER, UserRole.VOLUNTEER, UserRole.ADMIN),
  AuthControllers.changepassword,
);

export const AuthRoutes = router;
