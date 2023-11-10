import BlogCard from "@/components/blogs/BlogCard";
import DetailedCard from "@/components/blogs/DetailedCard";
import { DisplayBlogDTO, getEssential, getFeatured, getPopular, getRecent } from "@/crud/blog"
import Link from "next/link"
import React from 'react'

import prisma from "@/lib/prisma";
export type BlogHomeProps = {
    featured: DisplayBlogDTO;
    recent: DisplayBlogDTO[];
    essential: DisplayBlogDTO[];
    popular: DisplayBlogDTO[];

}

export const dynamic = 'force-dynamic';
async function Blogs() {
    const data = (await getData()) as BlogHomeProps
    // console.log(data.recent.slice(1, 2))
    return (
        <div className="z-10  dark:text-white ">
            <div className="container mx-auto my-10">
                <div className="flex flex-col lg:flex-row  w-full my-10">
                    <div className="h-[45vh] w-full  rounded-lg">
                        {data.featured ? <DetailedCard
                            id={data.featured.id}

                            author={data.featured.author.firstName || ""}
                            title={data.featured.title}
                            description={data.featured.description}
                            images={data.featured.images} ></DetailedCard>
                            :
                            <div className="bg-purple-600 w-full h-full  rounded-lg"></div>
                        }
                    </div>
                    <div className="flex flex-col p-5 w-full lg:w-1/4 ">
                        <div className="flex justify-between p-4 border-b-1 dark:border-gray-300">
                            <span className="text-xl font-bold">New blogs</span>
                            <Link href={'/blogs/new'} className="hover:underline text-gray-600 dark:text-gray-300 hover:text-[#FF5480]"> view all new</Link>
                        </div>
                        {data.recent.slice(0, 6).map((blog, index) => {
                            return (
                                <Link key={index} href={`/blogs/post/${blog.id}`} className="p-5">
                                    <div key={index} className="flex flex-col">
                                        <span className="font-thin">{(new Date(blog.date)).toLocaleString()}</span>
                                        <span className="hover:underline hover:text-[#FF5480]">{blog.title}</span>
                                    </div>
                                </Link>)
                        })}
                    </div>


                </div>
            </div>

            <div className="flex flex-col gap-4 my-10 container mx-auto">
                <div className="text-4xl font-bold my-2 flex justify-between">Popular <Link href={'/blogs/popular'} className="text-base text-[#FF5480] underline active:text-gray-400">view all</Link></div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="rounded-lg lg:w-1/2 lg:h-96">
                        {data.popular[0] && <DetailedCard
                            id={data.popular[0].id}
                            author={data.popular[0].author.firstName || ""}
                            title={data.popular[0].title}
                            description={data.popular[0].description}
                            images={data.popular[0].images} ></DetailedCard>}
                    </div>
                    <div className="flex flex-wrap lg:w-1/2 lg:h-96 gap-3">
                        {data.popular.slice(1, 4).map((blog, index) => {
                            return <div key={index} className="p-4 lg:w-[45%] lg:h-1/2">
                                <BlogCard id={blog.id} category={blog.tags[0] ? blog.tags[0].name : 'Uncategorised'} title={blog.title} key={index}></BlogCard>
                            </div>
                        })}
                    </div>
                </div>
            </div>

            <div className="my-10 container mx-auto">
                <div className="text-4xl font-bold my-2 flex justify-between">Essential <Link href={'/blogs/essential'} className="text-base text-[#FF5480] underline active:text-gray-400">view all</Link></div>
                <div className="flex flex-col lg:flex-row my-10">
                    <div className=" rounded-lg lg:w-1/2 lg:h-96">  
                        <DetailedCard
                            id={data.essential[0].id}
                            author={data.essential[0].author.firstName || ""}
                            title={data.essential[0].title}
                            description={data.essential[0].description}
                            images={data.essential[0].images} ></DetailedCard>
                    </div>

                    <div className="flex flex-wrap h-full lg:w-1/2   lg:h-96">
                        {data.essential.slice(1, 4).map((blog, index) => {
                            return <div key={index} className="w-[45%] p-4 h-1/2">
                                <BlogCard id={blog.id} category={blog.tags[0] ? blog.tags[0].name : 'Uncategorised'} title={blog.title} key={index}></BlogCard>
                            </div>
                        })}
                    </div>


                </div>
            </div>

            <div className="my-10 container mx-auto">
                <div className="text-4xl font-bold my-2">Freelance</div>
                {data.recent[1] &&
                    <div className="conatiner relative flex overflow-hidden flex-col md:flex-row-reverse my-5 h-80 w-full rounded-2xl shadow-lg">
                        <div className="w-full absolute h-full lg:w-1/2 lg:static">
                            {data.recent[1] && data.recent[1].images[0] ?
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={data.recent[1].images[0].src} alt="blog" className="w-full h-full"></img> :
                                <div className="bg-[#1c0042e7] w-full h-full"></div>
                            }
                        </div>
                        <div className="p-5 z-30 lg:p-10 w-full lg:w-1/2 lg:dark:bg-slate-800 ">
                            <p className="text-xl font-thin my-2">By {data.recent[1].author.firstName}</p>
                            <h2 className="text-5xl font-semibold mb-2">{data.recent[1].title}</h2>
                            <p className="text-lg">{data.recent[1].description}</p>
                        </div>
                    </div>}

            </div>

            <div className="container mx-auto my-10">
                <div className="text-4xl font-bold my-2 flex justify-between">
                    Reading List
                    <Link href={'/blogs/readinglist'} className="text-base text-[#FF5480] underline active:text-gray-400">view all</Link>
                </div>
                <div className="">

                </div>
            </div>


        </div>
    )
}


async function getData() {
    const featured = await getFeatured(prisma);
    const recent = await getRecent(prisma);
    const popular = await getPopular(prisma);
    const essential = await getEssential(prisma);
    return { featured, recent, essential, popular }

}
export default Blogs