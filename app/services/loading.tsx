import ServiceCardSkeleton from "@/components/services/ServiceCardSkeleton"
import React from 'react'

async function BlogListLoader() {
    return (
        <div className="w-full h-fit">
            <div className="container mx-auto ">
                <div className="container mx-auto">
                    <div className="mx-10 text-5xl my-5 capitalize">
                        Services
                    </div>
                </div>
                <div className="conatiner mx-10 my-10 flex flex-wrap items-center overflow-hidden ">
                    {new Array(5).fill(1).map((value, index) => {

                        return (
                            <div key={index} className={`w-full lg:w-1/2 p-5 `}>

                                <ServiceCardSkeleton />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

async function getData(list: string) {
    return []
}

export default BlogListLoader