import { verifyCaptcha } from "@/lib/externalRequests/google";
import { HttpError } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {

    try {
        const { token } = await req.json();

        if (process.env.NODE_ENV === 'development') return NextResponse.json({ message: 'success' });

        const { success } = await verifyCaptcha(token);

        if (success) {
            return NextResponse.json({ message: 'success' });

        } else {
            return NextResponse.json({ message: 'failed' }, { status: 400 });
        }

    } catch (error) {
        console.log(error)
        const errorMessage = error as HttpError;
        return NextResponse.json({ message: errorMessage.message }, { status: errorMessage.status || 500 });
    }

}