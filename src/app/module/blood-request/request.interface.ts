import { z } from "zod";
import {
  BloodGroup,
  RequestStatus,
  Urgency,
} from "../../../generated/prisma";

export const LIMIT_PAGE = "6";
export const PAGE = "1";

export const CreateBloodRequestSchema = z.object({
  patientName: z.string().min(1),
  bloodGroup: z.nativeEnum(BloodGroup),
  unitsNeeded: z
    .number()
    .int()
    .positive({ message: "unitsNeeded must be greater than 0" }),

  urgency: z.nativeEnum(Urgency).default("LOW"),

  neededAt: z
    .string()
    .datetime()
    .refine((date) => new Date(date) > new Date(), {
      message: "neededAt must be in the future",
    }),
  city: z.string().min(1),
  hospitalName: z.string().min(1),
  hospitalAddress: z.string().min(1),

  locationLat: z.number(),
  locationLng: z.number(),

  description: z.string().optional(),
});

export type CreateBloodRequestInput = z.infer<typeof CreateBloodRequestSchema>;

export const BloodRequestQuerySchema = z.object({
  bloodGroup: z.nativeEnum(BloodGroup).optional(),
  status: z.nativeEnum(RequestStatus).optional(),
  urgency: z.nativeEnum(Urgency).optional(),

  page: z
    .string()
    .default(PAGE)
    .transform((val) => Math.max(1, parseInt(val, 10))),
  limit: z
    .string()
    .default(LIMIT_PAGE)
    .transform((val) => Math.min(100, parseInt(val, 10))),

  // --- Search & Date Range ---
  searchTerm: z.string().optional(), // For searching patientName or description
  date: z.string().datetime().optional(), // For filtering by neededAt

  // --- Sorting ---
  sortBy: z.enum(["createdAt", "neededAt", "urgency"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type BloodRequestQueryInput = z.infer<typeof BloodRequestQuerySchema>;

export const BloodRequestStatusQuery = z.object({
  status: z.nativeEnum(RequestStatus),
});

export type BloodRequestStatusInput = z.infer<typeof BloodRequestStatusQuery>;

export const RequestCancellationSchema = z.object({
  actorUserId: z.string({
    required_error: "Id is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
});

export type RequestCancellationInput = z.infer<
  typeof RequestCancellationSchema
>;
