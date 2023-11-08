import { DisplayBlogDTO, read } from "@/crud/blog";
import React, { Suspense } from 'react'
import parse from 'html-react-parser';
import Image from "next/image";
import prisma from "@/lib/prisma";
import ProgressBar from "@/components/blogs/BlogReadProgess";
import Link from "next/link";
export const dynamic = 'force-dynamic'

async function BlogPost({ params }: { params: { id: string } }) {
    const blog = await getData(params.id);
    return (
        <div className="realtive w-full dark:text-white">
            <ProgressBar />
            <div className="container mx-auto ">
                <div className="">
                    <div className="m-4 text-4xl font-bold">{blog.title}</div>
                    <div className="m-4 font-bold">{blog.description}</div>
                    <div className="m-4">by. {blog.author.firstName} {blog.author.lastName} </div>
                </div>
                <div className="mx-10 m-2 flex flex-col justify-center items-center">
                    {blog.images[0] ? <Image className="object-cover m-2" src={blog.images[0].src} alt="Blog_image" width={500} height={300}></Image> : <></>}
                    <div className="m-2">{parse(blog.content)}</div>
                </div>


                <div className="w-full flex flex-col items-center justify-center gap-5">
                    <Link href={`/blogs/author/${blog.author.id}/1`} >
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                            {blog.author.image ? <Image src={blog.author.image.src} alt="image" height={50} width={50} />
                                :
                                <div className="w-full h-full bg-orange-500 flex items-center justify-center text-center text-3xl">{blog.author.firstName ? blog.author.firstName[0] : 'A'}</div>
                            }
                        </div>
                    </Link>
                    <div className="text-3xl">
                        {blog.author.firstName}
                    </div>
                </div>
            </div>
        </div>

    )
}


async function getData(id: string) {
    const blog = await read(id, prisma)

    return blog as DisplayBlogDTO

}

export default BlogPost