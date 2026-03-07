import { Router } from 'express';
import { AuthRoutes } from '../app/module/auth/auth.routs';
import { UserRoutes } from '../app/module/user/user.routs';


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
  // {
  //   path: "/",
  //   route: DonorRoutes,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
