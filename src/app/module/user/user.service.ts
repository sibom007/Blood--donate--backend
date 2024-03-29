import bcrypt from 'bcrypt';
import config from "../../../config";
import prisma from '../../../utils/prisma';
import { BloodGroup, Prisma, Role } from '@prisma/client';
import { IPaginationOptions, Tpayload } from './user.interface';
import { paginationHelper } from '../../../helper/paginationHelper';
import { userSearchAbleFields } from './user.constant';

const createUserIntoDB = async (payload: Tpayload) => {

  const UserData = {
    name: payload.User.name,
    email: payload.User.email,
    password: await bcrypt.hash(
      payload.password,
      Number(config.bcrypt_salt_rounds),
    ),
    role: payload.User.role as Role || Role.USER ,
    bloodType: payload.User.bloodType as BloodGroup,
    location: payload.User.location,
  }
  const result = await prisma.$transaction(async (TC) => {
    const user = await TC.user.create({
      data: UserData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        bloodType: true,
        location: true,
        profile: true
      }
    },
    );

    const userProfile = await TC.userProfile.create({
      data: {
        userId: user.id,
        bio: payload.User.bio,
        age: payload.User.age,
        lastDonationDate: payload.User.lastDonationDate,
      }
    })
    return { user, userProfile };
  })

  return result
};


const getdonorUserIntoDB = async (params: any, options: IPaginationOptions) => {
  const { searchTerm, ...filterData } = params;
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const andCondions: Prisma.UserWhereInput[] = [];

  if (params.searchTerm) {
    andCondions.push({
      OR: userSearchAbleFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: 'insensitive'
        }
      }))
    })
  };


  // if (Object.keys(filterData).length > 0) {
  //   andCondions.push({
  //     AND: Object.keys(filterData).map(key => ({
  //       [key]: {
  //         equals: (filterData as any)[key]
  //       }
  //     }))
  //   })
  // };



  if (Object.keys(filterData).length > 0) {
    andCondions.push({
      AND: Object.keys(filterData).map(key => {
        let value = filterData[key];
        if (key === 'availability' && typeof value === 'string') {
          value = value === 'true'; 
        }


        return {
          [key]: {
            equals: value
          }
        };
      })
    });
  };

  const whereConditons: Prisma.UserWhereInput = andCondions.length > 0 ? { AND: andCondions } : {};
  const result = await prisma.user.findMany({
    where: whereConditons,
    skip,
    take: limit,
    orderBy: options.sortBy && (options.sortOrder === 'asc' || options.sortOrder === 'desc') ? (
      options.sortBy === 'age' || options.sortBy === 'lastDonationDate' ? {
        profile: {
          ...(options.sortBy === 'age' && { age: options.sortOrder }),
          ...(options.sortBy === 'lastDonationDate' && { lastDonationDate: options.sortOrder }),
        },
      } : {
        [options.sortBy]: options.sortOrder,
      }
    ) : {
      createdAt: 'desc',
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      location: true,
      bloodType: true,
      availability:true,
      createdAt: true,
      updatedAt: true,
      profile: {
        select: {
          bio: true,
          age: true,
          lastDonationDate: true,
        }
      }
    }
  });

  const total = await prisma.user.count({
    where: whereConditons
  });

  return {
    meta: {
      page,
      limit,
      total
    },
    data: result
  };
};






export const userservise = {
  createUserIntoDB,
  getdonorUserIntoDB,
};