import express from 'express';
import { UserControllers } from "./user.contorler";
import validateRequest from "../../middlewares/validateRequest";
import { createUserSchema } from "./user.interface";

const router = express.Router();

router.post(
  "/register",
  validateRequest(createUserSchema),
  UserControllers.createUser,
);



export const UserRoutes = router;
