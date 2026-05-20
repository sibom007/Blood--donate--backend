import { Role } from "@prisma/client";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";

export interface CustomJwtPayload extends JwtPayload {
  id: string;
  email: string;
  name: string;
  role: Role;
}

const generateToken = (
  payload: CustomJwtPayload,
  secret: Secret,
  expiresIn: string,
) => {
  const token = jwt.sign(payload, secret, {
    algorithm: "HS256",
    expiresIn,
  });

  return token;
};

const verifyToken = (token: string, secret: Secret): CustomJwtPayload => {
  return jwt.verify(token, secret) as CustomJwtPayload;
};

export const jwtHelpers = {
  generateToken,
  verifyToken,
};
