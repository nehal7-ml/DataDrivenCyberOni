import React from 'react'
import { DetailedProps } from "./DetailedCard";

function GridBlogCard({ images, author, title, description }: DetailedProps) {
  return (
    <div className="overflow-hidden shadow-lg bg-gray-200  dark:bg-gray-700 rounded-lg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={images[0].src} alt={title} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="mb-2 text-gray-500">{author}</div>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );

}

export default GridBlogCard