import { db } from "../../../utils/prisma";
import { AuthUser } from "../Auth/auth.interface";
import { CreateRequestInput, GetRequestsQueryInput, UpdateStatusInput } from "./donor.interface";
import { getActiveUser } from "../../../helper/getActiveUser";
import AppError from "../../Error/AppError";
import httpStatus from "http-status";
import { Prisma } from "../../../generated/prisma";

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


const AllRequestViewInToDB = async (
  RequestUser: AuthUser | undefined,
  query: GetRequestsQueryInput,
) => {
  await getActiveUser(RequestUser?.email);

  const {
    bloodType,
    urgency,
    requestStatus,
    hospitalName,
    startDate,
    endDate,
    sortBy = "urgency",
    sortOrder = "desc",
    limit = 10,
    page = 1,
  } = query;

  const skip = (page - 1) * limit;

  const filters: Prisma.RequestWhereInput = {};

  if (bloodType) {
    filters.bloodType = bloodType;
  }

  if (urgency) {
    filters.urgency = urgency;
  }

  if (requestStatus) {
    filters.requestStatus = requestStatus;
  }

  if (hospitalName) {
    filters.hospitalName = {
      contains: hospitalName,
      mode: "insensitive",
    };
  }

  if (startDate || endDate) {
    filters.dateOfDonation = {};
    if (startDate) filters.dateOfDonation.gte = startDate;
    if (endDate) filters.dateOfDonation.lte = endDate;
  }

  const result = await db.request.findMany({
    where: filters,

    orderBy: {
      [sortBy]: sortOrder,
    },

    skip,
    take: limit,

    include: {
      donor: {
        select: {
          id: true,
          name: true,
          phoneNumber: true,
          bloodType: true,
        },
      },
      requester: {
        select: {
          id: true,
          name: true,
          phoneNumber: true,
        },
      },
    },
  });

  const total = await db.request.count({
    where: filters,
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
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
