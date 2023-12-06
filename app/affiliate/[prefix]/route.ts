import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from 'next/server'
import apiHandler from "@/errorHandler";
import { addClick, update } from "@/crud/referral";
import { ReferralType } from "@prisma/client";

export const { GET } = apiHandler({ GET: get });

async function get(req: NextRequest, { params }: { params: { prefix: string } }) {
    const updated = await addClick(params.prefix, ReferralType.AFFILIATE , prisma)
    return NextResponse.redirect(`${process.env.HOST}${updated.link}`)


}