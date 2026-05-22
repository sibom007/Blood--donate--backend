import { RequestStatus } from "../../../generated/prisma";
import { db } from "../../../utils/prisma";
import AppError from "../../Error/AppError";
import httpStatus from "http-status";

const DonorRequestIntoDB = async (payloadUser, Payload) => {
  const user = await db.user.findUnique({
    where: {
      email: payloadUser.email,
    },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }
  console.log(user);
  const result = await db.request.create({
    data: {
      phoneNumber: Payload.phoneNumber,
      hospitalName: Payload.hospitalName,
      hospitalAddress: Payload.hospitalAddress,
      reason: Payload.reason,
      dateOfDonation: Payload.dateOfDonation,
      requestStatus: RequestStatus.PENDING,
      donor: {
        connect: {
          id: Payload.donorId,
        },
      } as any,
      requester: {
        connect: {
          id: user.id,
        },
      } as any,
    },
    select: {
      id: true,
      phoneNumber: true,
      hospitalName: true,
      hospitalAddress: true,
      reason: true,
      dateOfDonation: true,
      requestStatus: true,
      donorId: true,
      requesterId: true,
      donor: {
        select: {
          id: true,
          name: true,
          email: true,
          bloodType: true,
          location: true,
          availability: true,
          profile: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });
  return result;
};
const GetDonorRequestIntoDB = async (payloadUser) => {
  const user = await db.user.findUnique({
    where: {
      email: payloadUser.email,
    },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }
  const result = await db.request.findMany({
    where: {
      requesterId: user.id,
    },
    include: {
      requester: {
        select: {
          id: true,
          name: true,
          email: true,
          bloodType: true,
          location: true,
          availability: true,
          profile: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });
  return result;
};

const UpdateDonorRequestIntoDB = async (
  id: string,
  payload: { status: RequestStatus },
) => {
  const result = await db.request.update({
    where: {
      id: id,
    },
    data: {
      requestStatus: payload.status,
    },
  });
  return result;
};

export const DonorRequestservice = {
  DonorRequestIntoDB,
  GetDonorRequestIntoDB,
  UpdateDonorRequestIntoDB,
};
