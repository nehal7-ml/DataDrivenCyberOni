'use client'

import { signIn } from "next-auth/react"

import React from 'react'
import { Github, Google } from "../shared/icons"
import FacebookIcon from "../shared/icons/facebook"

function OauthLogin() {
    return (
        <div className="flex justify-around items-center gap-4">
            <button className="w-20 h-20 flex justify-center items-center" onClick={() => signIn("google")}>
                <Google />
            </button>
            <button className="w-20 h-20 flex justify-center items-center " onClick={() => signIn("facebook")}>
                <FacebookIcon />
            </button>
            <button className="w-20 h-20 flex justify-center items-center " onClick={() => signIn("github")}>
                <Github />
            </button>
        </div>
    )
}

export default OauthLogin