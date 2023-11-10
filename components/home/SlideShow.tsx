'use client'
import useSwipe from "@/lib/hooks/use-swipe-gesture";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { HTMLAttributes, ReactNode, useState } from 'react'



function SlideShow({ slides }: HTMLAttributes<HTMLDivElement> & { slides: ReactNode[] }) {
    const totalSlides = slides?.length
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
    };
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % totalSlides);
    };
    const swipehandlers = useSwipe({ onSwipedLeft: prevSlide, onSwipedRight: nextSlide })

    return (
        <div {...swipehandlers} className={`  relative flex flex-col justify-center items-center bg-gradient-purple rounded-lg`}>
            {slides[currentIndex]}
            <div className="flex gap-5 mx-auto my-2">
                {(new Array(totalSlides).fill(1)).map((value, index) => {
                    return <div key={index} onClick={() => { setCurrentIndex(index) }} className={` cursor-pointer ${index === currentIndex ? 'bg-black dark:bg-white' : 'bg-white dark:bg-black'} w-2 h-2 rounded-full`}></div>
                })}
            </div>

            <div
                className="absolute top-1/2 left-2 transform -translate-y-1/2  text-blue-400 hover:shadow-lg hover:text-blue-700 p-2 cursor-pointer rounded-full bg-gray-50"
                onClick={prevSlide}
            >
                <ChevronLeft className="text-guru-blue" />

            </div>
            <div
                className="absolute top-1/2 right-2 transform -translate-y-1/2  text-blue-400 hover:shadow-lg hover:text-blue-700 p-2   cursor-pointer rounded-full bg-gray-50"
                onClick={nextSlide}
            >
                <ChevronRight className="text-guru-blue" />
            </div>
        </div>
    )
}

export default SlideShow