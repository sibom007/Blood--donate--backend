import { z } from "zod";
import { BloodGroup } from "../../../generated/prisma";

export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string | undefined;
  sortOrder?: string | undefined;
};

//  Profile schema
const userProfileSchema = z.object({
  bloodGroup: z.nativeEnum(BloodGroup),
  dateOfBirth: z.coerce.date(),
  city: z.string().trim().min(1),
  address: z.string().trim().min(1),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  medicalNotes: z.string().max(500).optional(),
});

/* Main user schema */
export const createUserSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .regex(/^(?:\+880|880|0)1[3-9]\d{8}$/, "Invalid Bangladeshi phone number"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  bio: z.string().max(300).optional(),
  profile: userProfileSchema,
});

export type CreateUserInput = z.infer<typeof createUserSchema>;