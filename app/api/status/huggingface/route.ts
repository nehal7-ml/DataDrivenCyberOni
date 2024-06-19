import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {

    let header = req.headers.get('authorization');
    if (!header || header.length < 1) return NextResponse.json({ message: 'UnAuthorized' }, { status: 401 })
    let key = header.split(" ")[1];
    if (!key || key.length < 1 || key !== process.env.STATUS_KEY) return NextResponse.json({ message: 'UnAuthorized' }, { status: 401 })
    return NextResponse.json({ status: 'running' })

}