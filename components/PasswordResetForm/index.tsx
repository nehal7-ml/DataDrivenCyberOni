'use client'
import { RotateCcw } from "lucide-react"
import React, { useEffect, useState, useTransition } from 'react'

import { useRouter, useSearchParams } from "next/navigation"
import { Message } from "@/components/AuthMessage"
import PasswordChecklist from "react-password-checklist"
import Link from "next/link"
import ClientInput from "@/components/layout/ClientInput"
import { resetPassword } from "@/components/PasswordResetForm/submit"


function ResetPasswordForm() {

    const [active, setActive] = useState(false);
    const searchParams = useSearchParams();
    const [confirm, setConfirm] = useState("");
    const [err, setErr] = useState<string | undefined>(undefined);
    const [success, setSuccess] = useState<boolean | undefined>(false);
    const [state, setState] = useState<{
        token: string,
        password: string,
        recaptcha: string,
        success?: boolean,
        error?: string,

    }>({
        password: "",
        success: success,
        recaptcha: "",
        token: searchParams.get("token") as string
    });
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    async function submit() {
        const newState = await resetPassword(state);
        setState(newState);
    }




    useEffect(() => {
        setState(prev => ({
            ...prev,
            token: searchParams.get('token') as string
        }))
    }, [searchParams]);


    return (<>
        <div className="container mx-auto max-w-md border rounded-xl backdrop-blur-sm bg-gray-50/10 dark:bg-black/5 h-full">
            {state.success === true ?
                <div>
                    <Message message="Password reset Sucessfull" type="green" />
                    <Link href={'/api/auth/signin'} className="text-blue-600 underline cursor-pointer">click to login</Link>
                </div >
                : state.error ?
                    <>
                        <Message message={`Error occured: ${state.error}`} type="red" />
                    </> :
                    <form className="container p-5" action={submit}>
                        <h1 className="text-bold text-4xl">Reset Password</h1>
                        <input name="recaptcha" type="hidden" defaultValue={""} />
                        <input name="token" type="hidden" defaultValue={searchParams.get('token') as string} />
                        <input name="success" type="hidden" defaultValue={'false'} />
                        <input name="error" type="hidden" defaultValue={""} />
                        <div className="relative my-10">
                            <ClientInput
                                className="peer shadow-lg appearance-none border rounded-xl w-full py-4 px-4 bg-transparent text-gray-700 dark:text-gray-200  leading-tight focus:outline-none focus:shadow-outline invalid"
                                name="password"
                                id="password"
                                type="password"
                                placeholder=""
                                value={state.password}
                                onChange={e => setState(prev => ({ ...prev, password: e.target.value }))}
                                required
                            />
                            <label className="block absolute top-0 left-3 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-y-3 peer-focus:text-blue-500 bg-gray-50 dark:bg-slate-900  px-1 text-gray-500 transition-all   text-sm font-bold mb-2" htmlFor="email">
                                New Password
                            </label>
                        </div>
                        <div className="relative my-10">
                            <ClientInput
                                className="peer shadow-lg appearance-none border rounded-xl w-full py-4 px-4 bg-transparent text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline invalid"
                                name="passwordRepeat"
                                id="passwordRepeat"
                                type="password"
                                placeholder=""
                                value={confirm}
                                onChange={e => setConfirm(e.target.value)}
                                required
                            />
                            <label className="block absolute top-0 left-3 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-y-3 peer-focus:text-blue-500 bg-gray-50  px-1 text-gray-500 transition-all   text-sm font-bold mb-2" htmlFor="email">
                                Confirm Password
                            </label>
                        </div>
                        <PasswordChecklist
                            className="mb-4"
                            rules={["minLength", "specialChar", "number", "capital", "match"]}
                            minLength={8}
                            value={state.password}
                            valueAgain={confirm}
                            onChange={(isValid) => { setActive(isValid); }}
                        />
                        <div className="flex items-center justify-center">
                            <button className="w-full flex px-10 bg-gradient-to-r rounded-lg from-[#E948C5] via-[#CD407B] to-[#75042D] disabled:cursor-not-allowed disabled:text-gray-400 hover:shadow-sm p-4 font-bold text-base gap-2 text-center justify-center items-center" type="submit">
                                <div className="flex-1">Reset password</div>
                            </button>
                        </div>
                    </form>}
        </div>

    </>
    )
}

export default ResetPasswordForm