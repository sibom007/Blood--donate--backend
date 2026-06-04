import express from 'express';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validateRequest from '../../middlewares/validateRequest';
import { Donorcontorler } from './donor.contorler';
import { CreateBloodRequestSchema } from './donor.interface';

const router = express.Router();

router.post(
  "/donation-request",
  auth(Role.USER, Role.OPERATOR, Role.SUPER_ADMIN),
  validateRequest(CreateBloodRequestSchema),
  Donorcontorler.createRequestADonor,
);

router.get(
    '/donation-request',
    auth(Role.USER, Role.SUPER_ADMIN),
    Donorcontorler.GetRequestofDonor
);
router.put(
    '/donation-request/:requestId',
    auth(Role.USER, Role.SUPER_ADMIN),
    Donorcontorler.UpdateRequestofDonor
);



export const DonorRoutes = router;
