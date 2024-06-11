import { PrismaClient } from "@prisma/client";

export type SessionDTO = {
    sessionToken: string;
    expires: Date;
    userId: string;
}
export async function create(session: SessionDTO, prisma: PrismaClient) {
    const sessions = prisma.session;
    return await sessions.create({
        data: session
    })
}

export async function update(sessionToken: string, prisma: PrismaClient) {
    const sessions = prisma.session;
    return await sessions.update({
        where: { sessionToken },
        data: {

        }
    })
}



export async function read(sessionToken: string, prisma: PrismaClient) {
    const sessions = prisma.session;
    return await sessions.findUnique({ where: { sessionToken: sessionToken }, include: { user: true } })
}

export async function getSessionBytoken(sessionToken: string, prisma: PrismaClient) {
    const sessions = prisma.session;
    return await sessions.findUnique({ where: { sessionToken: sessionToken }, include: { user: true } })
}