import GridBlogCard from "@/components/blogs/GridBlogCard";
import Pagination from "@/components/Pagination";
import { getBlogsByCategory } from "@/crud/blog";
import { DisplayBlogDTO } from "@/crud/DTOs";
import prisma from "@/lib/prisma";
import { Rss } from "lucide-react";
import Link from "next/link";
async function BlogsInCategoryPage({ params, searchParams }: { params: { name: string }, searchParams: { [key: string]: string | string[] | undefined } }) {

    const name = params.name.split("-").slice(0, -1).join(" ");
    const id = params.name.split("-").slice(-1)[0];
    let page = searchParams.page ? Number(searchParams.page) : 1;

    const data = await getData(id, page);

    return (
        <div className="px-5 lg:px-16">
            <div className="container mx-auto ">
                <div className="mx-10 text-3xl my-5 capitalize flex gap-5 items-center">
                    {name}
                    <Link href={`/blogs/rss/category/${params.name}`}>
                        <Rss />
                    </Link>
                </div>
            </div>
            <div className="w-full ">
                <div className="container mx-auto ">
                    <div className="conatiner mx-10 my-10 flex flex-wrap">
                        {data.list.map((blog, index) => {
                            return (
                                <div key={index} className={`w-full lg:w-1/2 p-5  lg:h-[25em] h-fit`}>
                                    <GridBlogCard blog={blog as DisplayBlogDTO} />
                                </div>
                            )
                        })}
                    </div>
                    <Pagination currentPage={1} pathname={`/blogs/category/${params.name}`} totalPages={data.totalPages > 5 ? 5 : data.totalPages} query={searchParams} />
                </div>
            </div>
        </div>
    )
}

async function getData(id: string, page: number) {

    const { list, totalPages } = await getBlogsByCategory(id, page, prisma);

    return { list, totalPages }

}

export default BlogsInCategoryPage;