import { z } from "zod";
import { AssignmentStatus, Urgency } from "../../../generated/prisma";

export const getDonorAssignmentsQuerySchema = z.object({
  page: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : 1)),
  limit: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : 10)),
  status: z.nativeEnum(AssignmentStatus).optional(),
  urgency: z.nativeEnum(Urgency).optional(),
});

export type GetDonorAssignmentsInput = z.infer<
  typeof getDonorAssignmentsQuerySchema
>;
