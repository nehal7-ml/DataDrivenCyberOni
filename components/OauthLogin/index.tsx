'use client'

import { Facebook, Github } from "lucide-react"
import { signIn } from "next-auth/react"

import React from 'react'
import { Google } from "../shared/icons"

function OauthLogin() {
  return (
    <div className="flex justify-center items-center gap-4">
                    <button onClick={()=>signIn("google")}>
                        <div>
                            <Google />
                        </div>
                    </button>
                    <button onClick={()=>signIn("facebook")}>
                        <div>
                            <Facebook />
                        </div>
                    </button>
                    <button onClick={()=>signIn("github")}>
                        <div>
                            <Github/>
                        </div>
                    </button>
                </div>
  )
}

export default OauthLogin