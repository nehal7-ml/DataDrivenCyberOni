'use client'
import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import xss from "xss";
function BlogShare() {
    const [isClient, setisClient] = useState(false);
    const urls = {
        facebook: 'https://www.facebook.com/sharer.php?u=',
        twitter: 'https://twitter.com/intent/tweet?url=',
        linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url=',
        instagram: 'https://www.facebook.com/sharer.php?u=',
    }

    useEffect(()=> {

       if ( typeof window !== "undefined" ) setisClient(true)
    }, [])
    return (
        <>
            {isClient?
                <>
                    <Link href={`${urls.facebook}${window.location.href}`}>
                        <Facebook />
                    </Link>
                    <Link href={`${urls.twitter}${window.location.href}`}>
                        <Twitter />
                    </Link>
                    <Link href={`${urls.instagram}${window.location.href}`}>
                        <Instagram />
                    </Link>
                    <Link href={`${urls.linkedin}${window.location.href}`}>
                        <Linkedin />
                    </Link>
                </>
                :
                <></>
            }

        </>);
}

export default BlogShare;