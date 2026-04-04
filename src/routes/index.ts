import { Router } from 'express';
import { AuthRoutes } from "../app/module/Auth/auth.routs";
import { UserRoutes } from "../app/module/user/user.routs";
import { RequestRoutes } from "../app/module/blood-request/request.routes";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
