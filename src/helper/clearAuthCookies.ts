import { Response } from "express";

export const clearAuthCookies = (res: Response) => {
  const isProd = process.env.NODE_ENV === "production";
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
  });

  return { message: "done" };
};
