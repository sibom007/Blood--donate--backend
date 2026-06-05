import { z } from "zod";
import { BloodGroupEnum } from "../user/user.interface";
import { TestResult, TestStatus } from "@prisma/client";

export const TestStatusEnum = z.nativeEnum(TestStatus);
export const TestResultEnum = z.nativeEnum(TestResult);

export const CreateInventorySchema = z
  .object({
    bloodGroup: BloodGroupEnum,

    bagNumber: z.string().trim().min(3, "Bag number is required").max(100),

    quantityML: z
      .number()
      .int()
      .min(100, "Minimum quantity is 100ml")
      .max(1000, "Maximum quantity is 1000ml"),

    donorName: z.string().trim().max(100).optional(),

    donorId: z.string().uuid().optional(),

    collectionDate: z.coerce.date(),

    expiryDate: z.coerce.date(),

    testStatus: TestStatusEnum.default("PENDING"),

    hivTest: TestResultEnum.default("PENDING"),

    hepatitisBTest: TestResultEnum.default("PENDING"),

    hepatitisCTest: TestResultEnum.default("PENDING"),

    malariaTest: TestResultEnum.default("PENDING"),

    syphilisTest: TestResultEnum.default("PENDING"),

    isAvailable: z.boolean().default(true),

    notes: z.string().trim().max(1000).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.expiryDate <= data.collectionDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["expiryDate"],
        message: "Expiry date must be greater than collection date",
      });
    }
  });

export type CreateInventoryInput = z.infer<typeof CreateInventorySchema>;
