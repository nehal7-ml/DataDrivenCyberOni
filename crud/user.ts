import { User, PrismaClient, Role } from "@prisma/client";
import { connectOrCreateObject, CreateImageDTO } from "./images";
import { createAddressDTO } from "./address";
import { GetAllRecordsDTO } from "./commonDTO";


export type createUserDTO = {
    id?: string;
    firstName?: string;
    lastName?: string;
    email: string;
    image?: CreateImageDTO;
    address?: createAddressDTO;
    role: Role;
}

export type displayUserDTO = {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    emailVerified: boolean;
    role: Role
}
async function create(user: createUserDTO, prismaClient: PrismaClient) {
    const users = prismaClient.user;
    const existingUser = await users.findUnique({ where: { email: user.email } })
    if (existingUser) throw {status:400 ,message: `User ${user.email} already exists`};
    else {
        let createdUser = await users.create({
            data: {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                image: { create: user.image },
                address: { create: user.address }
            }
        });
        return createdUser
    }

}

async function update(userId: string, user: createUserDTO, prismaClient: PrismaClient) {
    const users = prismaClient.user;
    const existingUser = await users.findUnique({ where: { id: userId } })

    if (!existingUser) throw {status:400 ,message: `User ${user.email} doesn't exists`};
    else {
        let updatedUser = await users.update({
            where: { id: userId }, data: {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                image: { update: user.image },
                address: { update: user.address }
            }
        });
        return updatedUser
    }

}
async function remove(userId: string, prismaClient: PrismaClient) {
    const users = prismaClient.user;
    const existingUser = await users.findUnique({ where: { id: userId } })
    if (existingUser) throw {status:400 ,message: `User ${userId} doesn't exists`};
    else {
        await users.delete({ where: { id: userId } });
        return true;
    }
}
async function read(userId: string, prismaClient: PrismaClient) {
    const users = prismaClient.user;
    const existingUser = await users.findUnique({ where: { id: userId } })
    if (existingUser) return existingUser
    else throw{status:400 ,message: `User ${userId} doesn't exists`};
}

async function getAll(page: number, pageSize: number, prismaClient: PrismaClient) {
    const users = prismaClient.user;

    if (pageSize !== 10 && pageSize != 30 && pageSize !== 50) throw new Error('page size must be 10, 30 or 50')

    let allUsers = await users.findMany({
        skip: (page - 1) * pageSize, take: pageSize,
        where: {
        },
        include: {
            // reviews: true,
            reviews: {
                include: {
                    _count: true
                }
            }
        }
    })

    const totalCount = await users.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    return { records: allUsers, currentPage: page, totalPages, pageSize } as GetAllRecordsDTO

}


export { create, update, remove, read, getAll }