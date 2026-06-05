import express from "express";
import auth from "../../middlewares/auth";
import { Role } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest";

import { InventoryContorler } from "./inventory.contorler";
import { CreateInventorySchema } from "./inventory.interface";

const router = express.Router();

router.post(
  "/add-blood",
  auth(Role.USER, Role.OPERATOR, Role.SUPER_ADMIN),
  validateRequest(CreateInventorySchema),
  InventoryContorler.createBloodInInventory,
);

router.get(
  "/available-blood",
  auth(Role.USER, Role.OPERATOR, Role.SUPER_ADMIN),
  InventoryContorler.availableBlood,
);

export const InventoryRoutes = router;
