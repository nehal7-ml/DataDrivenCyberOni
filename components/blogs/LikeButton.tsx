'use client'
import { LikeFormState, submitLike } from "@/app/blogs/post/[id]/addlike";
import { Heart } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react'
import GoogleCaptchaWrapper from "../GoogleCaptchaWrapper";
import { useReCaptcha } from "next-recaptcha-v3";
import Tooltip from "../shared/tooltip";


function LikeButton(props: { email?: string, blogId: string, likes: number, liked: boolean }) {
    return <GoogleCaptchaWrapper>
        <LikeButtonLOC {...props} />
    </GoogleCaptchaWrapper>
}
function LikeButtonLOC({ email, blogId, likes, liked }: { email?: string, blogId: string, likes: number, liked: boolean }) {
    const [showSignin, setShowSignin] = useState(false);
    const [current, setCurrent] = useState(likes);
    const router = useRouter();
    const { executeRecaptcha, loaded } = useReCaptcha();
    const [state, setState] = useState<LikeFormState>({
        blogId,
        email: email || '',
        token: '',
        error: undefined,
        success: undefined
    });
    async function submit() {
        if (liked) return;
        let token = await executeRecaptcha('blog_like_submit')
        if (!email) {
            setShowSignin(true);
            const searchParams = new URLSearchParams();
            if (typeof window !== 'undefined') searchParams.set('callback', window.origin)
            router.push(`/api/auth/signin?${searchParams.toString()}`)
            return;
        }
        else {
            const state = await submitLike({ blogId: blogId, email: email, token: token });
            setState(state)
        }
    }
    useEffect(() => {

        if (state.success) {
            setCurrent(prev => prev + 1)
        }

    }, [state]);
    return (
        <form action={submit} className="flex flex-col justify-center items-center " >
            <input name="blogId" defaultValue={blogId} hidden />
            <input name="email" defaultValue={email} hidden />
            <Tooltip content={`${liked ? 'remove like' : 'like'}`} >
                <button type="submit" >
                    <Heart className={`${liked || state.success ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>
            </Tooltip>
            {current}
        </form>
    )
}

export default LikeButton