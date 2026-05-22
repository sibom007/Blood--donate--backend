export type Tpayload = {
  password: string;
  User: User;
};

export type User = {
  name: string;
  email: string;
  password: string;
  bloodType: string;
  location: string;
  age: number;
  role: string;
  bio: string;
  lastDonationDate: string;
};

export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string | undefined;
  sortOrder?: string | undefined;
};


import { z } from "zod";
import { BloodDonner, BloodGroup } from "../../../generated/prisma";

export const createUserSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1, "Name cannot be empty")
    .max(100, "Name is to long"),

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

  bloodType: z.nativeEnum(BloodGroup),

  location: z.string({
    required_error: "Location is required",
  }),

  bio: z.string({
    required_error: "Bio is required",
  }),

  age: z.string({
    required_error: "Age is required",
  }),

  bloodDonner: z.nativeEnum(BloodDonner),
});

// This infers the TypeScript type directly from the schema
export type CreateUserInput = z.infer<typeof createUserSchema>;
