'use client'

import { useRef } from "react";
import ProgressBar from "./BlogReadProgess";
import BlogShare from "./BlogShare";
import { DisplayBlogDTO } from "@/crud/blog";
import BlogStats from "./BlogStats";

function BlogContainer({blog}: {blog:DisplayBlogDTO}) {
    const blogContainer = useRef<HTMLDivElement>(null)

    return (

        <>
            <ProgressBar container={blogContainer} ></ProgressBar>
            <div ref={blogContainer} className="absolute w-full h-full">
                <div className="absolute flex flex-col gap-5 top-10 -translate-x-full p-3">
                    <BlogShare />
                </div>

                <div className="absolute flex flex-col gap-5 top-10 right-0 translate-x-full p-3">
                        <BlogStats id={blog.id} likes={blog.Likes!.length} views={1000} />
                </div>
            </div>
        </>
    );
}

export default BlogContainer;