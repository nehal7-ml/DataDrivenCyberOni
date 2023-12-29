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
<<<<<<< HEAD
            <div ref={blogContainer} className="absolute w-full h-full">
                <div className="absolute flex xl:flex-col gap-5 -top-10 xl:top-10 xl:left-0 xl:-translate-x-full p-3">
                    <BlogShare />
                </div>

                <div className="absolute flex xl:flex-col gap-5 -top-10 right-0 xl:top-10 xl:right-0 xl:translate-x-full p-3">
=======
            <div ref={blogContainer} className="absolute w-full h-full container mx-auto px-[5rem]">
                <div className="absolute xl:w-10 flex xl:flex-col gap-5 -top-10 xl:top-10 left-0 xl:translate-x-4  p-3">
                    <BlogShare />
                </div>

                <div className="absolute xl:w-10 flex xl:flex-col gap-5 -top-10 right-0 xl:top-10 xl:right-0 xl:-translate-x-4  p-3">
>>>>>>> 8f0d6c8a059d87d1f0d68193e496ec3a953c9e6a
                    <BlogStats id={blog.id} likes={blog.Likes!.length} views={blog.Views as number} />
                </div>
            </div>
        </>
    );
}

export default BlogContainer;