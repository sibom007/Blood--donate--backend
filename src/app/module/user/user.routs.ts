import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { CreateUserSchema } from "./user.interface";
import { UserControllers } from './user.contorler';

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(CreateUserSchema),
  UserControllers.createUser,
);


// router.get("/donor-list", UserControllers.getdonorUser);
// router.put(
//   "/my-profile",
//   auth(Role.USER, Role.ADMIN),
//   UserControllers.updateUserProfile
// );
// router.get(
//   "/my-profile",
//   auth(Role.USER, Role.ADMIN),
//   UserControllers.getUserProfile
// );
// router.get(
//   "/my-profile/:id",
//   auth(Role.USER, Role.ADMIN),
//   UserControllers.getUserBYId
// );
// router.get(
//   "/donner-details/:id",
//   // auth(Role.USER, Role.ADMIN),
//   UserControllers.getSingleDonner
// );
// router.get("/All_user", auth(Role.ADMIN), UserControllers.GetAllUser);
// router.put(
//   "/updateUser-status/:id",
//   auth(Role.ADMIN),
//   UserControllers.UpdateUserStatus
// );
// router.put(
//   "/updateUser-role/:id",
//   auth(Role.ADMIN),
//   UserControllers.UpdateUserRoleStatus
// );


export const UserRoutes = router;
