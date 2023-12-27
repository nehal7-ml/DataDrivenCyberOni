'use server'

import { CreateUserDTO } from "@/crud/DTOs";
import { createWithPassword } from "@/crud/user";
import { verifyCaptcha } from "@/lib/externalRequests/google";
import prisma from "@/lib/prisma";
import { Role } from "@prisma/client";
export async function signUpSubmit(state: {
    email: string,
    password: string,
    success?: boolean,
    error?: string,
    token: string,
    valid: boolean
}) {

    try {
        const { success } = await verifyCaptcha(state.token);
        if (!success) state.error = "Captch failed try again";
        else {
            const newUser = await createWithPassword({
                email: state.email,
                role: Role.USER,
                password: state.password,
            }, prisma)
            if (newUser) state.success = true;
            else state.error = "User creation Failed"

        }
    } catch (error) {
        state.error = (error as Error).message
    }

    return state

}