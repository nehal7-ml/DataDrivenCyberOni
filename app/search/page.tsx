import { getBySearchTerm as searchBlogs } from "@/crud/blog"
import { getBySearchTerm as searchServices } from "@/crud/service";
import { getBySearchTerm as searchProducts } from "@/crud/service";

import React from 'react'
import prisma from "@/lib/prisma";
import Link from "next/link";
import { seoUrl } from "@/lib/utils";
import Pagination from "@/components/Pagination";

async function SearchResults({ searchParams }: { searchParams: { q: string, page: number, type: 'blogs' | 'services' | undefined } }) {
    if (searchParams.q) {
        let { records: blogs, totalPages: blogPages } = searchParams.type === 'blogs' ? { records: [], totalPages: 0 } : await searchBlogs(searchParams.q, searchParams.page || 1, prisma)
        let { records: services, totalPages: servicePages } = searchParams.type === 'services' ? { records: [], totalPages: 0 } : await searchServices(searchParams.q, searchParams.page || 1, prisma)
        //let products = searchParams.type === 'blogs' ? [] : await searchProducts(searchParams.q, searchParams.page || 1, prisma)

        // console.log(allRecords);
        return (
            <>
                <div className="flex gap-4 min-h-screen w-full">

                    <div className="h-full w-1/6">
                        <div className="text-xl text-gray-500 mb-5">Filter Results</div>
                        <Link href={{ query: { q: searchParams.q, page: searchParams.page, type: undefined }, pathname: '/search' }}>
                            <div className={`${!searchParams.type ? 'font-bold' : 'font-light'} `}>All</div>
                        </Link>
                        <Link href={{ query: { q: searchParams.q, page: searchParams.page, type: 'blogs' }, pathname: '/search' }}>
                            <div className={`${searchParams.type === 'blogs' ? 'font-bold' : 'font-light'}`}>Blogs</div>
                        </Link>
                        <Link href={{ query: { q: searchParams.q, page: searchParams.page, type: 'services' }, pathname: '/search' }}>
                            <div className={`${searchParams.type === 'services' ? 'font-bold' : 'font-light'}`}>Services</div>
                        </Link>
                    </div>


                    <div className="px-5 flex flex-col  border-2 border-t-0 h-full w-4/6 justify-between py-5">
                        <div>
                            <div className="self-start mb-10">Results for <span className="font-bold italic">{searchParams.q}</span></div>
                            {(blogs.length > 0) &&
                                <div>
                                    <div className="ml-4 flex flex-col gap-5">
                                        {blogs.map((blog, index) => ((
                                            <div key={index} >
                                                <Link href={`/blogs/post/${seoUrl(blog.title, blog.id)}`} className="flex flex-col gap-2">
                                                    <div className="text-blue-500">{blog.title}</div>
                                                    <div className="line-clamp-3 text-gray-400">{blog.subTitle}</div>
                                                </Link>
                                            </div>
                                        )))}
                                    </div>
                                </div>
                            }
                            {(services.length > 0) && <div>
                                <>
                                    <div className="ml-4 flex flex-col gap-5">
                                        {services.map((service, index) => ((
                                            <div key={index}>
                                                <Link href={`/services/${service.id}`}>
                                                    <div className="text-blue-500">{service.title}</div>
                                                    <div className="line-clamp-3 text-gray-400">{service.previewContent}</div></Link>
                                            </div>
                                        )))}
                                    </div></>
                            </div>}
                        </div>
                        <div>
                            <Pagination currentPage={Number(searchParams.page) ?? 1} pathname={`/search`} query={{ q: searchParams.q }} totalPages={
                                searchParams.type === 'blogs' ? blogPages : searchParams.type === 'services' ? servicePages : blogPages + servicePages
                            } />
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div></div>
        )
    }


}

export default SearchResults