import { ApiCredentials, PrismaClient, User } from "@prisma/client";

import jwt from 'jsonwebtoken';

export type createApiCredDTO = {
    id: string;
    email: string;
}

export enum ResourceName {
    USER = 'user',
    API_CREDENTIAL = 'api_credential',
    PRODUCT = 'product',
    PROMPT = 'gptprompt',
    BLOG = 'blog',
    EVENT = 'event',
    SERVICE = 'service',
    REVIEW = 'review',
}
export type displayApiCredDTO = ApiCredentials;

async function create(apiCred: createApiCredDTO, prismaClient: PrismaClient) {
    const apiCreds = prismaClient.apiCredentials;
    const connect = (apiCred as { id: string }).id ?
        { id: (apiCred as { id: string }).id } :
        { email: (apiCred as { email: string }).email };

    const user = await prismaClient.user.findUnique({ where: connect });

    if (!user) {
        throw new Error("User not found");
    }
    const token: string = jwt.sign(user, process.env.AUTH0_SECRET || "api_secret_kahdjijaspd")
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 90);
    let createdApiCred = await apiCreds.create({

        data: {
            token,
            expires: currentDate,
            user: { connect }
        }
    });
    return createdApiCred


}



async function remove(apiCredId: string, prismaClient: PrismaClient) {
    const apiCreds = prismaClient.apiCredentials;
    const existingapiCred = await apiCreds.findUnique({ where: { id: apiCredId } })
    if (existingapiCred) {
        await apiCreds.delete({ where: { id: apiCredId } })
    }
}
async function read(apiCredId: string, prismaClient: PrismaClient) {
    const apiCreds = prismaClient.apiCredentials;
    const existingapiCred = await apiCreds.findUnique({ where: { id: apiCredId } })
    if (existingapiCred) return existingapiCred;

}


export async function verifyToken(token: string) {
    const decoded = jwt.verify(token, process.env.AUTH0_SECRET || "api_secret_kahdjijaspd") as User;
    return decoded;
}

async function getAll(page: number, pageSize: number, prismaClient: PrismaClient) {
    const apiCreds = prismaClient.apiCredentials;

    if (pageSize !== 10 && pageSize != 30 && pageSize !== 50) throw new Error('page size must be 10, 30 or 50')

    let allApiCreds = await apiCreds.findMany({
        skip: (page - 1) * pageSize, take: pageSize,
        where: {
        },
        include: {
            // reviews: true,

        }
    })

    const totalCount = await apiCreds.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    return { records: allApiCreds, currentPage: page, totalPages, pageSize }

}



export { create, remove, read, getAll }