import express from 'express';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validateRequest from '../../middlewares/validateRequest';
import { Donorcontorler } from './donor.contorler';
import { CreateBloodRequestSchema } from './donor.interface';

const router = express.Router();

router.post(
  "/blood-request",
  auth(Role.USER, Role.OPERATOR, Role.SUPER_ADMIN),
  validateRequest(CreateBloodRequestSchema),
  Donorcontorler.createRequestADonor,
);

router.get(
  "/available-donor",
  auth(Role.USER, Role.OPERATOR, Role.SUPER_ADMIN),
  Donorcontorler.availableDonor,
);

router.get(
    '/own-requests',
    auth(Role.USER,Role.OPERATOR, Role.SUPER_ADMIN),
    Donorcontorler.ownRequests
);

router.delete(
    '/own-requests/:requestId',
    auth(Role.USER,Role.OPERATOR, Role.SUPER_ADMIN),
    Donorcontorler.deleteOwnRequest
);

router.get(
  "/check-blood-request",
  auth(Role.OPERATOR, Role.SUPER_ADMIN),
  Donorcontorler.checkBloodRequest,
);

router.patch(
  "/check-blood-request/:id",
  auth(Role.OPERATOR, Role.SUPER_ADMIN),
  Donorcontorler.checkBloodRequestStatus,
);



export const DonorRoutes = router;
