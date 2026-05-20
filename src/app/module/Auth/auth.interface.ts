import { Role } from "@prisma/client"
import { z } from "zod";
import config from "../../../config";
import { StringValue } from "ms";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters"),
});

export type loginInput = z.infer<typeof loginSchema>;

export const Tokenduration = config.refreshToken_secret_exparein as StringValue;



export type TokenUser = {
    id: string
    name: string
    email: string
    role: Role;
}