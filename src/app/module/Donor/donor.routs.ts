import express from 'express';
import auth from '../../middlewares/auth';
import { Role } from '../../../generated/prisma';
import validateRequest from '../../middlewares/validateRequest';
import { CreateRequestSchema, UpdateStatusSchema } from './donor.interface';
import { Donorcontorler } from './donor.contorler';


const router = express.Router();

router.post(
  "/donation-request",
  auth(Role.USER, Role.VOLUNTEER, Role.ADMIN),
  validateRequest(CreateRequestSchema),
  Donorcontorler.createRequest,
);

router.get(
  "/my-request-view",
  auth(Role.USER,Role.VOLUNTEER,Role.ADMIN),
  Donorcontorler.RequestView
);

router.get(
  "/all-request-view",
  auth(Role.ADMIN),
  Donorcontorler.AllRequestView
);

router.get(
  "/request-details/:requestId",
  auth(Role.USER, Role.VOLUNTEER, Role.ADMIN),
  Donorcontorler.RequestDetails,
);

router.patch(
  "/update-request/:requestId",
  auth(Role.ADMIN),
  validateRequest(UpdateStatusSchema),
  Donorcontorler.UpdateRequest,
);

router.delete(
  "/delete-request/:requestId",
  auth(Role.ADMIN),
  Donorcontorler.DeleteRequest,
);




// router.get(
//   "/givenDonation-request",
//   auth(Role.USER, Role.ADMIN),
//   Donorcontorler.GivienRequestofDonor
// );
// router.put(
//     '/donation-request/:requestId',
//     auth(Role.USER, Role.ADMIN),
//     Donorcontorler.UpdateRequestofDonor
// );



export const DonorRoutes = router;
