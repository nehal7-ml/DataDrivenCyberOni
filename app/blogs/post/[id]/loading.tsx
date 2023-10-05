import TextLoaders from "@/components/loaders/TextLoaders"
import React from 'react'

function BlogLoader() {
    return (
        <div className="w-full">
            <div className="container mx-auto ">
                <div className="">
                        <TextLoaders></TextLoaders>
                        <TextLoaders></TextLoaders>
                    
                    <div className="m-4">by.<TextLoaders></TextLoaders> </div>
                </div>

            </div>
        </div>
    )
}

export default BlogLoader