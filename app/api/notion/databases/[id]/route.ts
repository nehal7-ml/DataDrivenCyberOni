import { getDatabase } from "@/lib/externalRequests/notion";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, params: { id: string }) {

    try {

        const databaseId = params.id as string;
        const databases = await getDatabase({ databaseId });
        return NextResponse.json({ data: databases })


    } catch (error) {

        return NextResponse.json({ error }, { status: 500 })

    }
}


