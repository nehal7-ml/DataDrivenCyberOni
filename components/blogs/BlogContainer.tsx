'use client'

import { useRef } from "react";
import ProgressBar from "./BlogReadProgess";
import BlogShare from "./BlogShare";

function BlogContainer() {
    const blogContainer = useRef<HTMLDivElement>(null)

    return (

        <>
            <ProgressBar container={blogContainer} ></ProgressBar>
            <div ref={blogContainer} className="absolute w-full h-full">
                <div className="absolute flex flex-col gap-5 top-10 -translate-x-full p-3">
                    <BlogShare />
                </div>
            </div>
        </>
    );
}

export default BlogContainer;