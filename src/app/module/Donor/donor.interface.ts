import { z } from "zod";

export const BloodGroupEnum = z.enum([
  "A_POSITIVE",
  "A_NEGATIVE",
  "B_POSITIVE",
  "B_NEGATIVE",
  "AB_POSITIVE",
  "AB_NEGATIVE",
  "O_POSITIVE",
  "O_NEGATIVE",
]);

export const UrgencyLevelEnum = z.enum(["NORMAL", "URGENT", "CRITICAL"]);

export const RequestStatusEnum = z.enum(["PENDING", "ACCEPTED", "COMPLETED"]);




export const CreateRequestSchema = z.object({
  bloodType: z.enum(
    [
      "A_POSITIVE",
      "B_POSITIVE",
      "A_NEGATIVE",
      "B_NEGATIVE",
      "AB_POSITIVE",
      "AB_NEGATIVE",
      "O_POSITIVE",
      "O_NEGATIVE",
    ],
    {
      required_error: "Blood type is required",
    },
  ),

  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .min(10, "Invalid phone number")
    .max(15),

  dateOfDonation: z.coerce.date({
    required_error: "Donation date is required",
  }),

  hospitalName: z
    .string({ required_error: "Hospital name is required" })
    .trim()
    .min(2, "Hospital name must be at least 2 characters"),

  hospitalAddress: z
    .string({ required_error: "Hospital address is required" })
    .trim()
    .min(5, "Hospital address must be at least 5 characters"),

  description: z.string().max(500, "Description is too long").optional(),

  urgency: z.enum(["NORMAL", "URGENT", "CRITICAL"]).optional(),

  requestStatus: z
    .enum(["PENDING", "ACCEPTED", "COMPLETED", "CANCELLED"])
    .optional(),

  donorId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "Invalid donor ID")
    .optional(),
});
export type CreateRequestInput = z.infer<typeof CreateRequestSchema>;


export const UpdateStatusSchema = z.object({
  urgency: z.enum(["NORMAL", "URGENT", "CRITICAL"]).optional(),
  requestStatus: z
    .enum(["PENDING", "ACCEPTED", "COMPLETED", "CANCELLED"])
    .optional(),
});

export type UpdateStatusInput = z.infer<typeof UpdateStatusSchema>;

export const GetRequestsQuerySchema = z.object({
  bloodType: BloodGroupEnum.optional(),

  urgency: UrgencyLevelEnum.optional(), // single value
  requestStatus: RequestStatusEnum.optional(), // single value

  hospitalName: z.string().trim().optional(),

  search: z.string().trim().optional(),

  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),

  sortBy: z
    .enum(["urgency", "createdAt", "dateOfDonation"])
    .optional()
    .default("createdAt"),

  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),

  limit: z.coerce.number().min(1).max(100).optional().default(10),
  page: z.coerce.number().min(1).optional().default(1),
});

export type GetRequestsQueryInput = z.infer<typeof GetRequestsQuerySchema>;

export const normalizeArray = (value?: string | string[]) => {
  if (!value) return undefined;
  return Array.isArray(value) ? value : [value];
};