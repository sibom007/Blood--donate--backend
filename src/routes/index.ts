import { Router } from 'express';
import { AuthRoutes } from "../app/module/Auth/auth.routs";
import { UserRoutes } from "../app/module/user/user.routs";
import { DonorRoutes } from "../app/module/donor/donor.routs";
import { InventoryRoutes } from "../app/module/inventory/inventory.routs";

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
