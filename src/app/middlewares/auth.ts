// import config from "../../config";
// import httpStatus from "http-status";
// import AppError from "../Error/AppError";

// import { JwtPayload, Secret } from "jsonwebtoken";
// import { jwtHelpers } from "../../helper/jwtHelpers";
// import { AuthUser } from "../module/Auth/auth.interface";
// import { NextFunction, Request, Response } from "express";

// type TokenPayload = AuthUser & JwtPayload;

// const auth = (...roles: string[]) => {
//   return async (
//     req: Request & { user?: TokenPayload },
//     res: Response,
//     next: NextFunction,
//   ) => {
//     try {
//       const authHeader = req.headers.authorization;
//       const refreshToken = req.cookies?.refreshToken;

//       // access token missing
//       if (!authHeader) {
//         throw new AppError(httpStatus.UNAUTHORIZED, "ACCESS_TOKEN_MISSING");
//       }

//       // refresh token missing
//       if (!refreshToken) {
//         throw new AppError(httpStatus.UNAUTHORIZED, "REFRESH_TOKEN_MISSING");
//       }

//       const accessToken = authHeader.startsWith("Bearer ")
//         ? authHeader.split(" ")[1]
//         : authHeader;

//       let verifiedAccessUser: TokenPayload;
//       let verifiedRefreshUser: TokenPayload;

//       // verify access token
//       try {
//         verifiedAccessUser = jwtHelpers.verifyToken(
//           accessToken,
//           config.accesToken_secret as Secret,
//         ) as TokenPayload;
//       } catch (error: any) {
//         if (error.name === "TokenExpiredError") {
//           throw new AppError(httpStatus.UNAUTHORIZED, "ACCESS_TOKEN_EXPIRED");
//         }

//         if (error.name === "JsonWebTokenError") {
//           throw new AppError(httpStatus.UNAUTHORIZED, "INVALID_ACCESS_TOKEN");
//         }

//         throw new AppError(
//           httpStatus.UNAUTHORIZED,
//           "ACCESS_TOKEN_VERIFICATION_FAILED",
//         );
//       }

//       // verify refresh token
//       try {
//         verifiedRefreshUser = jwtHelpers.verifyToken(
//           refreshToken,
//           config.refreshToken_secret as Secret,
//         ) as TokenPayload;
//       } catch (error: any) {
//         if (error.name === "TokenExpiredError") {
//           throw new AppError(httpStatus.UNAUTHORIZED, "REFRESH_TOKEN_EXPIRED");
//         }

//         if (error.name === "JsonWebTokenError") {
//           throw new AppError(httpStatus.UNAUTHORIZED, "INVALID_REFRESH_TOKEN");
//         }

//         throw new AppError(
//           httpStatus.UNAUTHORIZED,
//           "REFRESH_TOKEN_VERIFICATION_FAILED",
//         );
//       }

//       // role check
//       if (roles.length && !roles.includes(verifiedAccessUser.role)) {
//         throw new AppError(httpStatus.FORBIDDEN, "FORBIDDEN_ROUTE_ACCESS");
//       }

//       req.user = verifiedAccessUser;

//       next();
//     } catch (err) {
//       next(err);
//     }
//   };
// };

// export default auth;

import config from "../../config";
import httpStatus from "http-status";
import AppError from "../Error/AppError";

import { JwtPayload, Secret } from "jsonwebtoken";
import { jwtHelpers } from "../../helper/jwtHelpers";
import { AuthUser } from "../module/Auth/auth.interface";
import { NextFunction, Request, Response } from "express";

type TokenPayload = AuthUser & JwtPayload;

const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: TokenPayload },
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const authHeader = req.headers.authorization;
      // const refreshToken = req.cookies?.refreshToken;

      // access token missing
      if (!authHeader) {
        throw new AppError(httpStatus.UNAUTHORIZED, "ACCESS_TOKEN_MISSING");
      }

      /* // refresh token missing
      if (!refreshToken) {
        throw new AppError(httpStatus.UNAUTHORIZED, "REFRESH_TOKEN_MISSING");
      } 
      */

      const accessToken = authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : authHeader;

      let verifiedAccessUser: TokenPayload;
      // let verifiedRefreshUser: TokenPayload;

      // verify access token
      try {
        verifiedAccessUser = jwtHelpers.verifyToken(
          accessToken,
          config.accesToken_secret as Secret,
        ) as TokenPayload;
      } catch (error: any) {
        if (error.name === "TokenExpiredError") {
          throw new AppError(httpStatus.UNAUTHORIZED, "ACCESS_TOKEN_EXPIRED");
        }

        if (error.name === "JsonWebTokenError") {
          throw new AppError(httpStatus.UNAUTHORIZED, "INVALID_ACCESS_TOKEN");
        }

        throw new AppError(
          httpStatus.UNAUTHORIZED,
          "ACCESS_TOKEN_VERIFICATION_FAILED",
        );
      }

      /* // verify refresh token
      try {
        verifiedRefreshUser = jwtHelpers.verifyToken(
          refreshToken,
          config.refreshToken_secret as Secret,
        ) as TokenPayload;
      } catch (error: any) {
        if (error.name === "TokenExpiredError") {
          throw new AppError(httpStatus.UNAUTHORIZED, "REFRESH_TOKEN_EXPIRED");
        }

        if (error.name === "JsonWebTokenError") {
          throw new AppError(httpStatus.UNAUTHORIZED, "INVALID_REFRESH_TOKEN");
        }

        throw new AppError(
          httpStatus.UNAUTHORIZED,
          "REFRESH_TOKEN_VERIFICATION_FAILED",
        );
      } 
      */

      // role check
      if (roles.length && !roles.includes(verifiedAccessUser.role)) {
        throw new AppError(httpStatus.FORBIDDEN, "FORBIDDEN_ROUTE_ACCESS");
      }

      req.user = verifiedAccessUser;

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;