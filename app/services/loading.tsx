import CardSkleton from "@/components/blogs/CardSkleton"
import TextLoaders from "@/components/loaders/TextLoaders"
import ServiceCardSkeleton from "@/components/services/ServiceCardSkeleton"
import { getRandomFromArray } from "@/lib/utils"
import React from 'react'

async function BlogListLoader() {
    return (
        <div className="w-full h-fit">

                <div className="conatiner mx-10 my-10 flex flex-wrap items-center overflow-hidden ">
                    {new Array(4).fill(1).map((value, index) => {

                        return (
                            <div key={index} className={`w-full lg:w-1/4 p-5 `}>

                                <ServiceCardSkeleton />
                            </div>
                        )
                    })}
                </div>

       </div>
    )
}

async function getData(list: string) {
    return []
}

export default BlogListLoader