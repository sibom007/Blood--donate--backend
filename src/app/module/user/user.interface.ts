import { BloodGroup, Gender } from "@prisma/client";
import { z } from "zod";

export const BloodGroupEnum = z.nativeEnum(BloodGroup);

export const GenderEnum = z.nativeEnum(Gender);

export const createUserSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),

  email: z.string().email("Invalid email address").toLowerCase(),

  phone: z.string().min(11).max(20),

  password: z.string().min(6, "Password must be at least 6 characters"),

  bloodGroup: BloodGroupEnum,

  gender: GenderEnum.optional(),

  age: z.number().int().min(18).max(100).optional(),

  address: z.string().max(255).optional(),

  city: z.string().max(100).optional(),

  district: z.string().max(100).optional(),

  profileImage: z.string().url().optional(),

  bio: z.string().max(500).optional(),

  isDonor: z.boolean().default(true).optional(),

  availability: z.boolean().default(true).optional(),

  weight: z.number().positive().optional(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
