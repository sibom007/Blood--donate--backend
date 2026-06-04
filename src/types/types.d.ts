import { Request } from "express";
import { TokenUser } from "../app/module/auth/auth.interface";

declare module "express-serve-static-core" {
  interface Request {
    user?: TokenUser;
  }
}
