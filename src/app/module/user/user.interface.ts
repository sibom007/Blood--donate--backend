import { z } from "zod";
export type Tpayload = {
  password: string;
  User: TUser;
};

export type TUser = {
  name: string;
  email: string;
  password: string;
  bloodType: string;
  location: string;
  age: number;
  role: string;
  bio: string;
  photo: string;
  donateBlood: "YES" | "NO";
  lastDonationDate: string;
};

export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string | undefined;
  sortOrder?: string | undefined;
};

export const CreateUserSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Invalid email address"),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters")
    .max(100),

  role: z.enum(["ADMIN", "VOLUNTEER", "USER"]).optional(),

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

  age: z
    .number({ required_error: "Age is required" })
    .int("Age must be an integer")
    .min(18, "Minimum age is 18")
    .max(65, "Maximum age is 65"),

  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .min(10, "Invalid phone number")
    .max(15),

  city: z.string({ required_error: "City is required" }).trim().min(2),

  bio: z.string().max(300).optional(),

  photo: z.string().url("Invalid photo URL").optional(),

  lastDonationDate: z.string().datetime().optional(),

  isAvailable: z.boolean().optional(),

  latitude: z.number().optional(),

  longitude: z.number().optional(),

  status: z.enum(["ACTIVE", "BLOCKED"]).optional(),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
