import { User, PrismaClient } from "@prisma/client";
import { connectOrCreateObject } from "./images";
import { GetAllRecordsDTO } from "./commonDTO";
import { CreateUserDTO, CredentialAuthDTO } from "./DTOs";
import bcrypt from "bcrypt"
import { AdapterAccount } from "next-auth/adapters";

async function createWithPassword(user: CreateUserDTO, prismaClient: PrismaClient) {
    const users = prismaClient.user;
    const existingUser = await users.findUnique({ where: { email: user.email } });
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

export async function getUserByAccount({ providerAccountId, provider }: { providerAccountId: string, provider: string }, prisma:PrismaClient) {
    const users = prisma.user;
    const accounts = prisma.account;
    const account = await accounts.findUnique({ where: { provider_providerAccountId: {provider, providerAccountId} } , include: {
        user:true
    }});
    return account?.user
}

export async function link(accountToLink: AdapterAccount, prisma:PrismaClient) {
    const accounts = prisma.account;
    const account = await accounts.create({
        data: accountToLink
    })
    return account 

}
export async function unLink({ providerAccountId, provider }: { providerAccountId: string, provider: string }, prisma:PrismaClient) {
    const accounts = prisma.account;
    const account = await accounts.delete({
        where: {
            provider_providerAccountId: {provider, providerAccountId}
        },

    })
    return account 
}

async function update(userId: string, user: CreateUserDTO, prismaClient: PrismaClient) {
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

export async function authorizeWithPassword({ email, password }: CredentialAuthDTO, prisma: PrismaClient) {
    const users = prisma.user
    const user = await users.findUnique({ where: { email: email.toLowerCase() } })
    if (!user || user.role === 'CUSTOMER' || user.role === 'USER') throw { message: `Invalid credentials account doesn't exist or insufucient permissions`, status: 400 };

    else {
        const authorized = await bcrypt.compare(password, user.password as string)
        if (!authorized) throw { message: `Invalid credentials account didn't match`, status: 401 };
        return user
    }

}
export async function getUserByEmail(email: string, prismaClient: PrismaClient) {
    const users = prismaClient.user;
    const existingUsers = await users.findUnique({ where: { email: email } })
    if (existingUsers) return existingUsers
    else throw { status: 400, message: `User ${email} doesn't exists` };
}

export { createWithPassword, update, remove, read, getAll }