import GridBlogCard from "@/components/blogs/GridBlogCard";
import Pagination from "@/components/Pagination";
import { getBlogsByCategory } from "@/crud/blog";
import { DisplayBlogDTO } from "@/crud/DTOs";
import prisma from "@/lib/prisma";
async function BlogsInCategoryPage({ params, searchParams }: { params: { name: string }, searchParams: { [key: string]: string | string[] | undefined } }) {

    const name = params.name.split("-").slice(0, -1).join(" ");
    const id = params.name.split("-").slice(-1)[0];
    let page = searchParams.page ? Number(searchParams.page) : 1;

    const data = await getData(id, page);

    return (
        <div className="px-5 lg:px-16">
            <div className="container mx-auto ">
                <div className="mx-10 text-3xl my-5 capitalize">
                    {name}
                </div>
            </div>
            <div className="w-full ">
                <div className="container mx-auto ">
                    <div className="conatiner mx-10 my-10 flex flex-wrap">
                        {data.map((blog, index) => {
                            return (
                                <div key={index} className={`w-full lg:w-1/2 p-5  lg:h-[25em] h-fit`}>
                                    <GridBlogCard blog={blog} />
                                </div>
                            )
                        })}
                    </div>
                    <Pagination currentPage={1} pathname={`/blogs/category/${params.name}`} totalPages={10} query={searchParams} />
                </div>
            </div>
        </div>
    )
}

async function getData(id: string, page:number) {

    const list = await getBlogsByCategory(id, page, prisma);

    return list as DisplayBlogDTO[]

}

export default BlogsInCategoryPage;