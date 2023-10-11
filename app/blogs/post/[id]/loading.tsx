import TextLoaders from "@/components/loaders/TextLoaders"
import { getRandomFromArray } from "@/lib/utils"
import React from 'react'

function BlogLoader() {
    return (
        <div className="w-full h-[60vh]">
            <div className="container mx-auto ">
                <div className="mx-10">
                    <TextLoaders></TextLoaders>
                    <TextLoaders></TextLoaders>
                </div>

                <div className="conatiner mx-10 my-10 flex flex-wrap overflow-hidden ">
                    {new Array(30).fill(1).map((value, index) => {

                        return (
                            <div key={index} className={`${getRandomFromArray(['w-64','w-80','w-96', 'w-72','w-52','w-full'])}`}>
                                <TextLoaders></TextLoaders>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default BlogLoader