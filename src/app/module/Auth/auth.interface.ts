import { z } from "zod";
import { UserRole } from "../../../generated/prisma";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type TLoginInput = z.infer<typeof LoginSchema>;

export const ChangePasswordSchema = z.object({
  email: z.string().email(),
  newPassword: z.string(),
  oldPassword: z.string(),
});

export type TChangePasswordInput = z.infer<typeof ChangePasswordSchema>;

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};