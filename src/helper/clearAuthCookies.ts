import { Response } from "express";

export const clearAuthCookies = (res: Response) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  return { message: "done" };
};
