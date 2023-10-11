import { Image } from "@prisma/client";
import Link from "next/link";
import React from 'react'

export type DetailedProps = {
    author: string;
    title: string;
    description: string,
    images: Image[],
    id: string
}
function DetailedCard({ author, title, description, images, id }: DetailedProps) {

    console.log(author, title, description)
    return (
        <Link href={`/blogs/post/${id}`}>

            <div className="relative rounded-lg shadow-lg overflow-hidden w-full h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {images[0]? <img src={images[0].src} alt={title} className="z-0 absolute w-full h-full object-cover" />
                :
                    <div className=""></div>    
            }
                <div className="relative text-white p-4 lg:p-20 w-full  h-full bg-[#1c00429e]">
                    <p className="text-xl font-thin">By {author}</p>
                    <h2 className="text-3xl font-semibold mb-2">{title}</h2>
                    <p className="text-lg">{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default DetailedCard