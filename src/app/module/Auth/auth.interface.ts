import { z } from "zod";
import { Role } from "../../../generated/prisma";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type TLogin = z.infer<typeof LoginSchema>;

export const ChangePasswordSchema = z.object({
  email: z.string().email(),
  newPassword: z.string(),
  oldPassword: z.string(),
});

export type TChangePassword = z.infer<typeof ChangePasswordSchema>;

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  tokenVersion: number;
};