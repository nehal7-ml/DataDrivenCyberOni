import { NextRequest, NextResponse } from "next/server";
import { addToMarketingCrm } from "@/lib/externalRequests/notion";

export async function POST(req: NextRequest) {
    try {
        const { properties } = await req.json()
        const newRecordRes = await addToMarketingCrm(  properties );
        return NextResponse.json({ data: newRecordRes })


    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 })

    }
}



