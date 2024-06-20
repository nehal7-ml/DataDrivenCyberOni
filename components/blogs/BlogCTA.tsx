"use client";

import Link from "next/link";

interface BlogCTAProps {
    title?: string;
    button?: string;
    link?: string;
}
function BlogCTA({ title, link, button }: BlogCTAProps) {
    return (
        <div className="mx-auto flex items-center lg:mx-10 justify-center gap-2 rounded-lg bg-violet-500 p-5 text-white py-8">
            <div>
                <h1>{title ? title : "Subscribe to our newsletter"}</h1>
            </div>

            <Link
                href={link ? link : ""}
                className="text-lg font-semibold text-white-600 hover:bg-gray-900 bg-black p-3   rounded-2xl"
            >
                {button ? button : "Subscribe"}
            </Link>
        </div>
    );
}

export default BlogCTA;
