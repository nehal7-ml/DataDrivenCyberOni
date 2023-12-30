'use client'
import { ArrowRight, Facebook } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from 'react'
import ClientInput from "@/components/layout/ClientInput"
import { getCsrfToken , signIn} from "next-auth/react";
import { Github, Google } from "../shared/icons";
import AuthFormFooter from "../shared/auth-form-footer";
import OauthLogin from "../OauthLogin";

function LoginForm() {
    const searchParams = useSearchParams();
    const [csrfToken, setCsrfToken] = useState("");
    const [search, setSearch] = useState({
        error: searchParams.get('error') as string,

    });

    useEffect(() => {
        async function loadToken() {
            const csrfToken = await getCsrfToken()
            setCsrfToken(csrfToken as string);
        }
        loadToken();
    }, []);

    useEffect(() => {
        setSearch({
            error: searchParams.get('error') as string,
        })
    }, [searchParams]);

    return (
        <>
            <div className="container mx-auto max-w-md border rounded-xl backdrop-blur-sm bg-gray-50/10 dark:bg-black/5 py-5">

                <form method="POST" action={'/api/auth/callback/credentials'} className="flex flex-col px-5 pt-5 pb-1 bg-transparent rounded-2xl text-gray-950 dark:text-gray-50">
                    <h1 className="text-bold text-2xl dark:text-gray-50 my-1">Login</h1>
                    <p className="text-base my-1">Glad you are back</p>
                    {search.error === 'CredentialsSignin' ?
                        <div className="bg-rose-500/80 rounded-lg px-4 py-1 text-gray-200 my-3 ring-red-600 ring-2">
                            Wrong credentials try again with correct credentials
                        </div> : <></>}
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                    <div className="relative my-4">

                        <ClientInput
                            className="peer shadow-lg appearance-none border dark:border-gray-200 rounded-xl w-full py-4 px-4 bg-transparent text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                            name="username"
                            id="username"
                            type="email"
                            placeholder=""
                            required
                        />
                        <label className="block absolute top-0 left-3 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-y-3 peer-focus:text-blue-500 bg-gray-50 dark:bg-slate-900 backdrop-blur-sm  px-1 dark:text-gray-100 text-gray-500 transition-all   text-sm font-bold mb-2 rounded-full" htmlFor="email">
                            Email
                        </label>
                    </div>
                    <div className="relative my-4">

                        <ClientInput
                            className="peer shadow-lg appearance-none border dark:border-gray-200 rounded-xl w-full py-4 px-4 bg-transparent text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                            name="password"
                            type="password"
                            placeholder=""
                            required
                        />
                        <label className="block absolute top-0 left-3 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-y-3 peer-focus:text-blue-500 bg-gray-50 dark:bg-slate-900 backdrop-blur-sm px-1 text-gray-500 dark:text-gray-50  transition-all   text-sm font-bold mb-2 rounded-full" htmlFor="password">
                            Password
                        </label>
                    </div>
                    <div className="flex items-center justify-center px-1 py-2">
                        <button disabled={csrfToken == ""} className="w-full flex px-10 bg-gradient-to-br rounded-lg from-[#628EFF] via-[#8740CD] to-[#580475] disabled:cursor-not-allowed disabled:text-gray-400 hover:shadow-sm p-4 font-bold text-base gap-2 text-center justify-center items-center" type="submit">
                            <div className="flex-1">Login</div>
                        </button>
                    </div>

                    <Link className="hover:text-blue-500 hover:underline text-center text-sm py-1" href={'/auth/forgot'}>Forgot Password?</Link>
                </form>
                <div className="my-4 text-center font-bold  flex items-center justify-center gap-3"><hr className="w-1/3" /> OR <hr className="w-1/3" /></div>
                <OauthLogin />
                <AuthFormFooter />
                
            </div>
        </>
    )
}

export default LoginForm