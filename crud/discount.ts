import "server-only";
import { PrismaClient } from "@prisma/client";
import { CreateDiscountDTO } from "./DTOs";

export async function create(
  discount: CreateDiscountDTO,
  prisma: PrismaClient,
) {
  const discounts = prisma.discount;
  const newDiscount = await discounts.create({
    data: discount,
  });

  return newDiscount;
}

export async function read(name: string, prisma: PrismaClient) {
  const discounts = prisma.discount;
  const newDiscount = await discounts.findUnique({
    where: {
      name,
      OR: [
        {
          expires: {
            equals: null,
          },
        },

        {
          expires: {
            gte: new Date(),
          },
        },
      ],
    },
  });

  return newDiscount;
}

export async function remove(id: string, prisma: PrismaClient) {
  const discounts = prisma.discount;
  const newDiscount = await discounts.delete({
    where: {
      id,
    },
  });

  return newDiscount;
}

export async function update(
  id: string,
  discount: CreateDiscountDTO,
  prisma: PrismaClient,
) {
  const discounts = prisma.discount;
  const newDiscount = await discounts.update({
    where: {
      id,
    },
    data: discount,
  });

  return newDiscount;
}

export async function getAll(
  page: number,
  pageSize: number,
  prismaClient: PrismaClient,
) {
  const discounts = prismaClient.discount;

  if (pageSize !== 10 && pageSize != 30 && pageSize !== 50)
    throw new Error("page size must be 10, 30 or 50");

  let allDiscounts = await discounts.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    where: {},
  });

  const totalCount = await discounts.count();
  const totalPages = Math.ceil(totalCount / pageSize);

  return { records: allDiscounts, currentPage: page, totalPages, pageSize };
}
