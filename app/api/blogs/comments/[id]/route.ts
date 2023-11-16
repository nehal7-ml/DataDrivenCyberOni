import { addComment, getComments } from "@/crud/blog";
import apiHandler from "@/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export const { POST, DELETE, GET, PATCH, PUT } = apiHandler({ GET: get, POST: post });


async function get(req: NextRequest, { params }: { params: { id: string } }) {
    const query = req.nextUrl.searchParams

    const page = Number(query.get('page')) || 1;
    const { id } = params;

    const comments = await getComments(id, page, prisma);

    return NextResponse.json({ comments })
}

async function post(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const { comment, name, email } = await req.json()
    const newComment = await addComment({
        comment,
        email,
        name,
        blogId: id,
    }, prisma);

    return NextResponse.json({ comment: newComment })

}