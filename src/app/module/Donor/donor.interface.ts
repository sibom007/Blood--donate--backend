import { z } from "zod";
import { BloodGroupEnum } from "../user/user.interface";
import { bloodRequest } from "@prisma/client";
import { TokenUser } from "../auth/auth.interface";

export const CreateBloodRequestSchema = z
  .object({
    donorId: z.string().uuid().optional(),

    inventoryId: z.string().uuid().optional(),

    patientName: z
      .string()
      .trim()
      .min(2, "Patient name must be at least 2 characters")
      .max(100, "Patient name is too long"),

    patientAge: z
      .number()
      .int()
      .min(0, "Age cannot be negative")
      .max(150, "Invalid age")
      .optional(),

    bloodGroup: BloodGroupEnum,

    unitsRequired: z
      .number()
      .int()
      .min(1, "At least 1 unit is required")
      .max(10, "Cannot request more than 10 units"),

    hospitalName: z
      .string()
      .trim()
      .min(2, "Hospital name is required")
      .max(200),

    hospitalAddress: z
      .string()
      .trim()
      .min(5, "Hospital address is required")
      .max(500),

    contactPerson: z
      .string()
      .trim()
      .min(2, "Contact person name is required")
      .max(100),

    contactPhone: z
      .string()
      .trim()
      .regex(/^(?:\+8801|01)[3-9]\d{8}$/, "Invalid Bangladesh phone number"),

    reason: z.string().trim().max(1000).optional(),

    requiredDate: z.coerce.date(),
  })
  .superRefine((data, ctx) => {
    // Cannot select both donor and inventory
    if (data.donorId && data.inventoryId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["inventoryId"],
        message: "Choose either a donor or inventory blood, not both.",
      });
    }

    // Required date cannot be in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (data.requiredDate < today) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["requiredDate"],
        message: "Required date cannot be in the past.",
      });
    }
  });

export type CreateBloodRequestInput = z.infer<typeof CreateBloodRequestSchema>;


export interface PaginatedBloodRequests {
  data: bloodRequest[];
  nextPage: number | null;
}

export interface GetOwnRequestsArgs {
  authUser: TokenUser;
  page?: number; // The current page number (e.g., 1, 2, 3...)
  limit?: number; // How many items to fetch per request
}
