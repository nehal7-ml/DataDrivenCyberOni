import React from 'react'
import prisma from "@/lib/prisma"
import { getAuthor } from "@/crud/blog"
import Image from "next/image"
import Pagination from "@/components/Pagination"
async function BlogAuthor({ params: { id }, searchParams }: { params: { id: string, page: number }, searchParams: { page: number } }) {
  const { page } = searchParams
  const author = await getAuthor(id, page, prisma)
  return (
    <div className="container mx-auto">
      <div></div>
      {
        author?.blogs.map((blog, index) => {
          return <div key={index} className={`w-full lg:w-1/2 p-5  lg:h-96`}>
            <div className="overflow-hidden h-full shadow-lg   dark:bg-gray-700 rounded-lg">
              <div className=" bg-gray-400 h-2/3">
                <Image
                  className="w-full h-full"
                  src={blog.images[0] ? blog.images[0].src : 'https://placehold.co/600x400'}
                  alt={blog.title}
                  height={200}
                  width={200} />
              </div>
              <div className="px-6 py-1">
                <div className="mb-2">by {author.firstName} </div>
                <div className="mb-2 font-bold text-2xl">{blog.title}</div>
                <div className="">{blog.subTitle}</div>
              </div>
            </div>
          </div>
        })
      }
      <Pagination currentPage={1} totalPages={10} pathname={`/blogs/author/${id}`} />
    </div>
  )
}

export default BlogAuthor