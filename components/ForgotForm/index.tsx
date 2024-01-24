'use client'
import ClientInput from "@/components/layout/ClientInput";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react"
import React, { useEffect, useState } from 'react'
import { resetPassword } from "./submit";
import { Message } from "@/components/AuthMessage";
import { useSearchParams } from "next/navigation";
import AuthFormFooter from "../shared/auth-form-footer";

function ForgotPassword() {
    const searchParams = useSearchParams()
    const [success, setSucess] = useState(searchParams.get('success') === "true" ? true : searchParams.get('success') === "false" ? false : null)
    const [sent, setSent] = useState(searchParams.get('sent') === "true" ? true : searchParams.get('success') === "false" ? false : null)
    const [error, setError] = useState(searchParams.get('error') || null)


    useEffect(() => {
        setSucess(searchParams.get('success') === "true" ? true : searchParams.get('success') === "false" ? false : null)
        setSent(searchParams.get('sent') === "true" ? true : searchParams.get('success') === "false" ? false : null)
        setError(searchParams.get('error') || null)
    }, [searchParams]);
    return (
        <div className="container mx-auto max-w-md border rounded-xl backdrop-blur-sm bg-gray-50/10 dark:bg-black/5 h-full">
            {(success === null && sent === null && error === null) ?

                <form action={resetPassword} className="px-5 py-3">
                    <h1 className="text-bold text-2xl">Forgot Password ?</h1>

                    <div className="relative my-10">
                        <ClientInput
                            className="peer shadow-lg appearance-none border dark:border-gray-200 rounded-xl w-full py-4 px-4 bg-transparent text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
                            name="username"
                            id="username"
                            type="email"
                            placeholder=""
                            required
                        />
                        <label className="block absolute top-0 left-3 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-y-3 peer-focus:text-blue-500 dark:bg-slate-900 bg-white  px-1 text-gray-500 dark:text-gray-50  transition-all   text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="w-full flex px-10 bg-gradient-to-r rounded-lg from-[#E948C5] via-[#CD407B] to-[#75042D] disabled:cursor-not-allowed disabled:text-gray-400 hover:shadow-sm p-4 font-bold text-base gap-2 text-center justify-center items-center" type="submit">
                            <div className="flex-1">Reset password</div>

                        </button>
                    </div>
                </form> :

                error === 'NotFound' ?
                    <>
                        <Message message="User Not found" type="red" />

                    </> :
                    sent === true ? <Message message="Password reset link has been sent check email" type="green" /> :
                        sent === false ? <Message message="Faield to send message" type="red" /> :
                            success === true ? <>
                                <Message message="Password reset check email for new password" type="green" />
                            </> :

                                success === false ? <Message message="Failed to reset Password" type="red" />
                                    : <></>

            }
            <AuthFormFooter />

        </div>
    )
}




export default ForgotPassword