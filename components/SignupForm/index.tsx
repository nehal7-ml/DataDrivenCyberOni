'use client'
import { ArrowRight, Facebook, XCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from 'react'
import ClientInput from "@/components/layout/ClientInput"
import { getCsrfToken } from "next-auth/react";
import { Github, Google } from "../shared/icons";
import GoogleCaptchaWrapper from "../GoogleCaptchaWrapper";
import { useReCaptcha } from "next-recaptcha-v3";
import { signUpSubmit } from "@/app/auth/signup/submit";
import PasswordChecklist from "react-password-checklist"
import OauthLogin from "../OauthLogin";
import Modal from "../shared/modal";

function SignupForm() {
    return <>
        <GoogleCaptchaWrapper >
            <SignupFormLOC />
        </GoogleCaptchaWrapper>
    </>
}
function SignupFormLOC() {
    const searchParams = useSearchParams();
    const [csrfToken, setCsrfToken] = useState("");

    const { executeRecaptcha, loaded } = useReCaptcha();
    const [confirm, setConfirm] = useState("");
    const [state, setState] = useState<{
        token: string,
        email: string,
        password: string,
        success?: boolean,
        error?: string,
        valid: boolean,

    }>({
        password: "",
        success: undefined,
        token: searchParams.get("token") as string,
        email: "",
        valid: true
    });

    useEffect(() => {
        async function loadToken() {
            const csrfToken = await getCsrfToken()
            setCsrfToken(csrfToken as string);
        }
        loadToken();
    }, []);




    async function submit() {
        if (!state.valid) {
            setState(prev => ({ ...prev, error: "password not valid" }))
            return
        }
        if (!loaded) {
            setState(prev => ({ ...prev, error: "captcha not loaded" }))
            return
        }
        const token = await executeRecaptcha('signup_submit');
        setState(prev => ({ ...prev, token }));

        const newState = await signUpSubmit({ ...state, token });
        setState(newState);
    }

    const [errorModal, setErrorModal] = useState(true);

    useEffect(() => {
        if(state.error) {
            setErrorModal(true)
        }

    }, [state]);

    return (
        <>
            <div className="container mx-auto max-w-md border rounded-xl backdrop-blur-sm bg-gray-50/10 dark:bg-black/5 py-3 h-fit">

                <form  action={submit} className="relative flex flex-col px-5 pt-5 pb-1 bg-transparent rounded-2xl text-gray-950 dark:text-gray-50 mb-5">
                    <h1 className="text-bold text-2xl dark:text-gray-50 my-1">Signup</h1>
                    <p className="text-base my-1">Just some details to get you in.!</p>
                    {state.error  ?
                        <div className="bg-rose-500/80 rounded-lg px-4 py-1 text-gray-200 my-3 ring-red-600 ring-2">
                            {state.error}
                        </div> : <></>}
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                    <div className="relative my-2">

                        <ClientInput
                            className="peer shadow-lg appearance-none border dark:border-gray-200 rounded-xl w-full py-4 px-4 bg-transparent text-gray-700 dark:text-gray-100   leading-tight focus:outline-none focus:shadow-outline"
                            name="username"
                            id="username"
                            type="email"
                            placeholder=""
                            value={state.email}
                            onChange={(e) => setState(prev => ({
                                ...prev,
                                email: e.target.value
                            }))}
                            required
                        />
                        <label className="block absolute top-0 left-3 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-y-3 peer-focus:text-blue-500 dark:bg-slate-900 bg-gray-50/80 rounded-lg  px-1 dark:text-gray-100 transition-all   text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                    </div>
                    <div className="relative my-2">

                        <ClientInput
                            className="peer shadow-lg appearance-none border dark:border-gray-200 rounded-xl w-full py-4 px-4 bg-transparent text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                            name="password"
                            type="password"
                            placeholder=""
                            value={state.password}
                            onChange={(e) => setState(prev => ({
                                ...prev,
                                password: e.target.value
                            }))}
                            required
                        />
                        <label className="block absolute top-0 left-3 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-y-3 peer-focus:text-blue-500 dark:bg-slate-900 bg-white  px-1 text-gray-500 dark:text-gray-50  transition-all   text-sm font-bold mb-2" htmlFor="email">
                            Password
                        </label>

                    </div>
                    <div className="relative my-2">

                        <ClientInput
                            className="peer shadow-lg appearance-none border dark:border-gray-200 rounded-xl w-full py-4 px-4 bg-transparent text-gray-700 dark:text-gray-100   leading-tight focus:outline-none focus:shadow-outline"
                            name="confirm"
                            type="password"
                            value={confirm}
                            onChange={e => setConfirm(e.target.value)}
                            placeholder=""
                            required
                        />
                        <label className="block absolute top-0 left-3 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-y-3 peer-focus:text-blue-500 dark:bg-slate-900 bg-white  px-1 text-gray-500 dark:text-gray-50  transition-all   text-sm font-bold mb-2" htmlFor="email">
                            Confirm Password
                        </label>
                        <div className={`absolute bg-gray-200 dark:bg-gray-700 p-3 w-full rounded-lg  ${state.valid ? 'hidden' : 'block'}`}>
                            <PasswordChecklist
                                className="mb-4"
                                rules={["minLength", "specialChar", "number", "capital", "match"]}
                                minLength={8}
                                value={state.password}
                                valueAgain={confirm}
                                onChange={(isValid) => { setState(prev => ({ ...prev, valid: isValid })); }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center px-1 py-2">
                        <button disabled={csrfToken == ""} className="w-full flex px-10 bg-gradient-to-r rounded-lg from-[#2E4CEE] via-[#221EBF] to-[#040F75] disabled:cursor-not-allowed disabled:text-gray-400 hover:shadow-sm p-4 font-bold text-base gap-2 text-center justify-center items-center" type="submit">
                            <div className="flex-1">Sign up</div>
                        </button>
                    </div>

                    <Link className="hover:text-blue-500 hover:underline text-center text-sm py-1" href={'/auth/forgot'}>Forgot Password?</Link>
                </form>
                <div className="my-6 text-center font-bold  flex items-center justify-center gap-3"><hr className="w-1/3" /> OR <hr className="w-1/3" /></div>
                <OauthLogin />

                <div className="my-2 text-center mt-5">
                    <div>Already have an Account?<Link href={'/auth/signin'} className="px-2 hover:underline hover:text-blue-500">Login</Link></div>
                    <div className="flex justify-around gap-4">
                        <Link href={'/privacy'}>Terms and Conditions</Link>
                        <Link href={'/contact'}>Support</Link>
                        <Link href={'/contact'}>Customer Care</Link>
                    </div>
                </div>
            </div>

            {/* <Modal setShowModal={ setErrorModal} showModal={errorModal } >

                <div className="container mx-auto  flex gap-5 items-center justify-center text-red-500">
                    <XCircle />
                    {state.error || "error occured"}
                </div>
            </Modal> */}
        </>
    )
}

export default SignupForm