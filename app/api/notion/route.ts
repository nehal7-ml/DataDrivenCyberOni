import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { addToMarketingCrm } from "@/lib/externalRequests/notion";

export default async function POST(req: NextRequest) {
    try {
        const { properties } = await req.json()
        const newRecordRes = await addToMarketingCrm({ newRecord: properties });
        return NextResponse.json({ data: newRecordRes })


    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 })

    }
}



