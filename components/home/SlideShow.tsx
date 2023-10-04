'use client'
import React, { HTMLAttributes, ReactNode, useState } from 'react'



function SlideShow({ slides }: HTMLAttributes<HTMLDivElement> & { slides: ReactNode[] }) {
    const totalSlides = slides?.length
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={`flex flex-col justify-center items-center bg-gradient-purple rounded-lg`}>
            {slides[currentIndex]}
            <div className="flex gap-5 mx-auto my-2">
                {(new Array(totalSlides).fill(1)).map((value, index) => {
                    return <div key={index} onClick={() => { setCurrentIndex(index) }} className={` cursor-pointer ${index === currentIndex ? 'bg-black dark:bg-white' : 'bg-white dark:bg-black'} w-2 h-2 rounded-full`}></div>
                })}
            </div>
        </div>
    )
}

export default SlideShow