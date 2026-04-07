import { Router } from 'express';
import { AuthRoutes } from "../app/module/Auth/auth.routs";
import { UserRoutes } from "../app/module/user/user.routs";
import { RequestRoutes } from "../app/module/blood-request/request.routes";
import { DonorRoutes } from "../app/module/donor/donor.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/",
    route: UserRoutes,
  },

  {
    path: "/",
    route: RequestRoutes,
  },
  {
    path: "/",
    route: DonorRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
