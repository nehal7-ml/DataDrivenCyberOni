import React from 'react'

export type DetailedProps = {
    author: string; title: string; description: string, image: string
}
function DetailedCard({ author, title, description, image }: DetailedProps) {
    return (
        <div className="relative rounded-lg shadow-lg overflow-hidden w-full h-full">
            <img src={image} alt={title} className="z-0 absolute w-full h-full object-cover" />
            <div className="z-30 p-4 w-full  h-full bg-[#1B004234]">
                <p className="text-indigo-500 text-sm font-semibold">{author}</p>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}

export default DetailedCard