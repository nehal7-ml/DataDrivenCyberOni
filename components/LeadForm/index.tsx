'use client'
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { AlertCircle, Mail, X } from "lucide-react";
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { LoadingCircle } from "../shared/icons";
import Balancer from "react-wrap-balancer";
import { usePathname, useRouter, } from "next/navigation";
import useScroll from "@/lib/hooks/use-scroll";

function LeadForm() {

    const [display, setDisplay] = useState(false);
    const modal = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const path = usePathname();
    const scrolled = useScroll(25)
    const [loading, setLoading] = useState(false);
    const [showThanks, setShowThanks] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        const today = new Date();
        const seen = new Date(window.localStorage.getItem('leadFormDate') ?? "");
        const filled = window.localStorage.getItem('leadFormFilled') === 'true' ? true : false

        if ((today.getTime() - seen.getTime()) > (24 * 60 * 60 * 1000) && !filled) { // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
            window.localStorage.setItem('leadFormShown', 'false');
        }


    }, [])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (name && email) {
            let res = await fetch(`/api/marketing/contact`, { method: "POST", body: JSON.stringify({ name, email, subject: 'Lead form capture' }) })
            setShowForm(false)
            if (res.status === 200) {
                setShowThanks(true)
                window.localStorage.setItem('leadFormFilled', 'true')

            }
            else {
                setShowError(true)
            }

        }

    };
    const handleVisible = useIntersectionObserver(modal, { threshold: 0.1, freezeOnceVisible: true })


    function onClose() {
        setDisplay(false)
    }

    useEffect(() => {

    }, [router]);

    useEffect(() => {
        const shown = window.localStorage.getItem('leadFormShown') === 'true' ? true : false
        const filled = window.localStorage.getItem('leadFormFilled') === 'true' ? true : false
        const validPath = !path.startsWith('/auth/signin') &&
            !path.startsWith('/auth/signup') &&
            !path.startsWith('/auth/forgot') &&
            !path.startsWith('/auth/reset') &&
            !path.startsWith('/tos') &&
            !path.startsWith('/privacy') &&
            !path.startsWith('/404')

        if (handleVisible?.isIntersecting && !shown && !filled && validPath && scrolled) {
            setDisplay(true)
            window.localStorage.setItem('leadFormShown', 'true')
            window.localStorage.setItem('leadFormDate', new Date().toString())

        }

    }, [handleVisible?.isIntersecting, path, scrolled]);
    return (
        <div ref={modal} className="relative w-full overflow-hidden z-[99999]">
            <div className={`${display ? 'visible' : 'hidden'} fixed w-screen inset-0 flex items-center justify-center`}>
                <div className="absolute inset-0 backdrop-blur-md w-full"></div>
                <div className="text-white relative bg-opacity-10 backdrop-blur-md bg-blend-hue border-darkblue border-4 bg-gradient-purple rounded-lg p-8 w-full lg:w-1/3">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold">Sign up and Get 20%Off!</h2>
                    </div>
                    {!showForm && !showThanks && !showError &&
                        <>
                            <LoadingCircle></LoadingCircle>
                        </>}
                    {showForm && isClient && <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            {/* <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label> */}
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 placeholder-white  rounded-md focus:ring focus:ring-blue-200 border-0 border-b-2 border-blue-100   focus:border-darkblue p-2 focus:border-transparent focus:outline-none ring-0  bg-transparent autofill-neutral"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                                required
                            />
                        </div>
                        <div className="mb-4">
                            {/* <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label> */}
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 placeholder-white   rounded-md focus:ring focus:ring-blue-200 border-0 border-b-2 border-blue-100  focus:border-darkblue p-2 focus:border-transparent focus:outline-none ring-0  bg-transparent autofill-neutral"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-opacity-30 bg-gradient-purple rounded-full p-[0.5rem]  hover:bg-darkblue focus:outline-none focus:ring focus:ring-purple-500"
                        >
                            <div className="p-[0.4rem] bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-950 w-full text-center rounded-full ">Subscribe</div>
                        </button>
                    </form>}

                    {showThanks &&
                        <>
                            <div className="w-full flex flex-col justify-center items-center p-10 text-center">
                                <Mail />
                                <Balancer>Added to Waitlist</Balancer>
                            </div>
                        </>}

                    {showError &&
                        <>
                            <div className="w-full flex flex-col justify-center items-center p-10 text-center">
                                <AlertCircle color="red" />
                                <Balancer>An error occurred</Balancer>
                            </div>
                        </>
                    }
                    <button
                        className="absolute top-4 right-4 hover:text-gray-700 cursor-pointer"
                        onClick={onClose}
                    >
                        <X></X>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LeadForm