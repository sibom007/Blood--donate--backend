import { Request } from "express";
import { AuthUser } from "../app/module/Auth/auth.interface";

declare module "express-serve-static-core" {
  interface Request {
    user: AuthUser;
  }
}
