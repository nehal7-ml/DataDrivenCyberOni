import Link from "next/link"
import React from 'react'

function AuthFormFooter() {
    return (
        <div className="my-2 text-center mt-5 px-3">
            <div>Dont have an Account?<Link href={'/auth/signup'} className="px-2 hover:underline hover:text-blue-500">Signup</Link></div>
            <div className="flex justify-around gap-4">
                <Link href={'/privacy'}>Terms and Conditions</Link>
                <Link href={'/contact'}>Support</Link>
                <Link href={'/contact'}>Customer Care</Link>
            </div>
        </div>
    )
}

export default AuthFormFooter