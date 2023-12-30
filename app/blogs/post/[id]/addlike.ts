'use server'

export type LikeFormState = {
    email: string;
    blogId: string;
    token: string;
    error?: string;
    success?: boolean
}
import { addLike, removeLike } from "@/crud/blog";
import { verifyCaptcha } from "@/lib/externalRequests/google";
import prisma from "@/lib/prisma";


export async function submitLike({ email, blogId, token, error, success }: LikeFormState) {
    const result = await verifyCaptcha(token);
    if (!result.success) error = "Captch failed try again";
    else {
        try {
            const like = await addLike(blogId, email, prisma);
            success = true;
        } catch (error) {
            error = (error as Error).message;
        }

    }

    return { email, blogId, token, error, success }
}


export async function submitUnlike({ email, blogId, token, error, success }: LikeFormState) {
    const result = await verifyCaptcha(token);
    if (!result.success) error = "Captch failed try again";
    else {
        try {
            const like = await removeLike(blogId, email, prisma);
            success = like;
        } catch (error) {
            error = (error as Error).message;
        }

    }

    return { email, blogId, token, error, success }
}