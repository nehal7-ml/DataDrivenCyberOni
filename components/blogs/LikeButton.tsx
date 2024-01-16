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
    const [submitting, setSubmitting] = useState(false);
    const [state, setState] = useState<LikeFormState>({
        blogId,
        email: email || '',
        token: '',
        liked:liked,
        likes: likes,
        error: undefined,
        success: true,
    });
    async function like() {
        if (state.success) return;
        let token = await executeRecaptcha('blog_like_submit')
        if (!email) {
            setShowSignin(true);
            const searchParams = new URLSearchParams();
            if (typeof window !== 'undefined') searchParams.set('callbackUrl', window.location.href+'/')
            console.log(searchParams.toString());
            router.push(`/api/auth/signin?${searchParams.toString()}`)
            return;
        }
        else {
            setState(prev => ({ ...prev, success: false }));
            setCurrent(prev => prev + 1)
            const newState = await submitLike({ blogId: blogId, email: email, token: token ,liked: state.liked , likes: state.likes});
            console.log(newState);
            setState(newState)
            if (!newState.success) setCurrent(prev => prev - 1)

        }
    }



    return (
        <form  action={like} className="flex lg:flex-col gap-1 justify-center items-center " >
            <div>
                <input name="blogId" defaultValue={blogId} hidden />
                <input name="email" defaultValue={email} hidden />
            </div>
            <Tooltip disbaled={submitting} type="submit" content={`${state.success ? 'remove like' : 'like'}`} >
                <Heart className={`${state.success ? 'fill-rose-500 text-rose-500' : ''} cursor-pointer`} />
            </Tooltip>
            {current}
        </form>
    )
}

export default LikeButton