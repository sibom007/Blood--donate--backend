// TODO:NEED to add
// age:true,
// bio:true,
// name:true,
// lastDonationDate:true,
// phoneNumber:true,
// bloodType:true,
// city:true,
// email:true,
// latitude:true,
// longitude:true,
// photo:true,
// role:true,
// createdAt:true,
// updatedAt:true,

import { db } from "../../../utils/prisma";
import { AuthUser } from "../auth/auth.interface";
import { CreateRequestInput, UpdateStatusInput } from "./donor.interface";
import { getActiveUser } from "../../../helper/getActiveUser";
import AppError from "../../Error/AppError";
import httpStatus from "http-status";

const RequestForBloodIntoDB = async (
  AuthUser: AuthUser | undefined,
  payload: CreateRequestInput,
) => {
   await getActiveUser(AuthUser?.email);

  const result = await db.request.create({
    data: payload,
  });

  return result;
};

const RequestViewInToDB = async (RequestUser: AuthUser | undefined) => {
  const user = await getActiveUser(RequestUser?.email)

  const result = await db.request.findMany({
    where: {
      requesterId: user.id,
    },
  });
  return result;
};

const AllRequestViewInToDB = async (RequestUser: AuthUser | undefined) => {
   await getActiveUser(RequestUser?.email)

  return await db.request.findMany({
     orderBy:{
          urgency:"desc"
     }
  });
};

const RequestDetailsInToDB = async (
  RequestUser: AuthUser | undefined,
  requestId: string,
) => {
  await getActiveUser(RequestUser?.email);
  const result = await db.request.findUnique({
     where:{
          id:requestId
     },
     
  })

if (!result) {
  throw new AppError(httpStatus.NOT_FOUND, "Request not found. check with Admin!");
}

  return result;
};
const UpdateRequestInToDB = async (
  RequestUser: AuthUser | undefined,
  payload: UpdateStatusInput,
  requestId:string
) => {
  await getActiveUser(RequestUser?.email);

  const result = await db.request.update({
     where:{
          id:requestId
     },
     data:{
          urgency:payload.urgency,
          requestStatus:payload.requestStatus
     }
  })

  if (!result) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Request not found. check with devloper!",
    );
  }

  return result;
};

const DeleteRequestInToDB = async (
  RequestUser: AuthUser | undefined,
  requestId: string,
) => {
  await getActiveUser(RequestUser?.email);

  const result = await db.request.findFirst({
    where: {
      id: requestId,
    },
  });


  if (!result) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Request not found",
    );
  }

  await db.request.delete({
    where:{
      id:result.id
    }
  })

  return result;
};

export const DonorRequestservice = {
  RequestForBloodIntoDB,
  RequestViewInToDB,
  AllRequestViewInToDB,
  RequestDetailsInToDB,
  UpdateRequestInToDB,
  DeleteRequestInToDB,
};
