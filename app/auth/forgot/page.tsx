
import { getProviders, signIn, getCsrfToken, useSession } from "next-auth/react"
import NextAuth, { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/nextAuthAdapter"
import ClientInput from "@/components/layout/ClientInput"
import { ArrowRight, ArrowRightCircle } from "lucide-react"
import Image from "next/image"
import { ReadonlyURLSearchParams, redirect } from "next/navigation"
import { cookies } from 'next/headers'
import { NextRequest } from "next/server"
import Link from "next/link"
import LoginForm from "@/components/LoginForm"
import { DisplayUserDTO } from "@/crud/DTOs"
import SignupForm from "@/components/SignupForm"
import ForgotPassword from "@/components/ForgotForm"


export default async function Forgot() {

    const session = await getServerSession(authOptions)

    // console.log(search);
    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!


    if (session) {
        const user = session.user as DisplayUserDTO;
        if (user) redirect('/')
    }

    return (
        <div className="flex gap-2 lg:gap-5 flex-col lg:flex-row justify-center items-center py-5 max-h-screen">
            <Image src={'/images/forgot-bg.png'} width={700} height={900} alt="login_bg" className="absolute object-contain h-full right-10 w-fit" />
            <div className="flex flex-col p-5 justify-center items-center">
                <h1 className="text-4xl text-center lg:text-[96px] ">No worries...</h1>
            </div>
            <ForgotPassword />
        </div>
    )

}

