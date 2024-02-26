import { createPaymentIntent } from "@/lib/externalRequests/stripe";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const cookieStore = cookies();

        const { price, description, metadata } = await req.json()
        const { client_secret } = await createPaymentIntent({ price, description, metadata })
        cookieStore.set('clientSecret', client_secret as string)
        
        return NextResponse.json({ clientSecret: client_secret });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error }, { status: 500 })
    }
}


export async function PUT(req: NextRequest) {
    try {
        const cookieStore = cookies();
        const { price, description, metadata, clientSecret } = await req.json()
        const { client_secret } = await createPaymentIntent({ price, description })
        cookieStore.set('clientSecret', client_secret as string)

        return NextResponse.json({ clientSecret: client_secret });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error }, { status: 500 })
    }
}


