import Image from "next/image"
import Link from "next/link"
import React from 'react'

function BlogCard({ category, title, id }: { category: string, title: string, id: string }) {
    return (
        <div className="w-full h-full rounded-lg shadow-lg  dark:bg-zinc-900 p-4">
            <Link href={`/blogs/post/${id}`} className=" ">
                <div className="text-indigo-500 text-sm font-semibold mb-2">{category}</div>

                <h2 className="text-xl font-semibold mb-4">{title}</h2>

            </Link>
        </div>



    )
}

export default BlogCard