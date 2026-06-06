import { Router } from 'express';
import { AuthRoutes } from "../app/module/auth/auth.routes";
import { UserRoutes } from '../app/module/user/user.routes';
import { DonorRoutes } from '../app/module/donor/donor.routes';
import { InventoryRoutes } from '../app/module/inventory/inventory.routes';



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
    route: DonorRoutes,
  },
  {
    path: "/inventory",
    route: InventoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
