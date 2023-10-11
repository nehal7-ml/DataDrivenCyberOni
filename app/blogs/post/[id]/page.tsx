import { displayBlogDTO } from "@/crud/blog";
import { RecordDTO } from "@/crud/commonDTO"
import React, { Suspense } from 'react'
import parse from 'html-react-parser';
import TextLoaders from "@/components/loaders/TextLoaders";
import BlogLoader from "./loading";
export const dynamic = 'force-dynamic'

async function BlogPost({ params }: { params: { id: string } }) {
    const blog = await getData(params.id);
    return (
        <div className="w-full dark:text-white">
            <div className="container mx-auto ">
                <div className="">
                    <div className="m-4 text-4xl font-bold">{blog.title}</div>
                    <div className="m-4 font-bold">{blog.description}</div>
                    <div className="m-4">by. {blog.author.firstName} {blog.author.lastName} </div>
                </div>
                <div className="mx-10 m-2 flex flex-col justify-center items-center">
                    {blog.images[0] ? <img className="object-cover m-2" src={blog.images[0].src} alt="Blog_image" width={500} height={300}></img> : <></>}
                    <div className="m-2">{parse(blog.content)}</div>
                </div>
            </div>
        </div>

    )
}


async function getData(id: string) {
    const apiUrl = process.env.HOST
    const res = await fetch(`${apiUrl}/api/blogs/${id}`)

    return (await res.json()).data as displayBlogDTO

}

export default BlogPost