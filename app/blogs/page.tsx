import BlogCard from "@/components/blogs/BlogCard";
import DetailedCard from "@/components/blogs/DetailedCard";
import { displayBlogDTO } from "@/crud/blog"
import Link from "next/link"
import React from 'react'

export type BlogHomeProps = {
    featured: displayBlogDTO;
    recent: displayBlogDTO[];
    essential: displayBlogDTO[];
    popular: displayBlogDTO[];

}

export const dynamic = 'force-dynamic';
async function Blogs() {
    const data = (await getData()) as BlogHomeProps
    return (
        <div className="z-10 container mx-auto dark:text-white">
            <div></div>
            <div>
                <div className="text-4xl font-bold my-2 flex justify-between">ReadingList <Link href={'/blogs/readinglist'} className="text-[#FF5480] underline active:text-gray-400">view all</Link></div>
            </div>
            <div className="flex flex-col">
                <div className="text-4xl font-bold my-2 flex justify-between">Popular <Link href={'/blogs/popular'} className="text-[#FF5480] underline active:text-gray-400">view all</Link></div>
                <div className="grid grid-cols-4 grid-rows-2">
                    <div className="col-span-2 row-span-2">
                        <DetailedCard author={data.popular[0].author.firstName || ""}
                            title={""}
                            description={""}
                            image={data.popular[0].images[0].src} ></DetailedCard>
                    </div>
                    {data.popular.slice(1, 4).map((blog, index) => {

                        return <BlogCard category={blog.tags[0].name} title={blog.title} key={index}></BlogCard>
                    })}
                </div>
            </div>
            <div>
                <div className="text-4xl font-bold my-2">Random</div>

            </div>
            <div>
                <div className="text-4xl font-bold my-2 flex justify-between">Essential <Link href={'/blogs/essential'} className="text-[#FF5480] underline active:text-gray-400">view all</Link></div>

            </div>
        </div>
    )
}


async function getData() {
    const apiUrl = process.env.HOST
    const res = await fetch(`${apiUrl}/api/blogs/home`)
    const resJson = await res.json()
    return resJson.data
}
export default Blogs