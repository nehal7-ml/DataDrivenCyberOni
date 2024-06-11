import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";


export async function GET(req: NextRequest) {

    let header = req.headers.get('authorization');
    if (!header || header.length < 1) return NextResponse.json({ message: 'UnAuthorized' }, { status: 401 })
    let key = header.split(" ")[1];
    if (!key || key.length < 1 || key !== process.env.STATUS_KEY) return NextResponse.json({ message: 'UnAuthorized' }, { status: 401 })

    const client = new Stripe(process.env.STRIPE_API_KEY!);
    await client.balance.retrieve();
    return NextResponse.json({ status: 'running' })

}