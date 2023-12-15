'use client'

import { useRef } from "react";
import ProgressBar from "./BlogReadProgess";
import BlogShare from "./BlogShare";
import { DisplayBlogDTO } from "@/crud/blog";
import BlogStats from "./BlogStats";

function BlogContainer({ blog }: { blog: DisplayBlogDTO }) {
    const blogContainer = useRef<HTMLDivElement>(null)

    return (

        <>
            <ProgressBar container={blogContainer} ></ProgressBar>
            <div ref={blogContainer} className="absolute w-full h-full container mx-auto px-16">
                <div className="absolute w-10 flex xl:flex-col gap-5 -top-10 xl:top-10 xl:left-0 xl:translate-x-4  p-3">
                    <BlogShare />
                </div>

                <div className="absolute w-10 flex xl:flex-col gap-5 -top-10 right-0 xl:top-10 xl:right-0 xl:-translate-x-4  p-3">
                    <BlogStats id={blog.id} likes={blog.Likes!.length} views={blog.Views as number} />
                </div>
            </div>
        </>
    );
}

export default BlogContainer;