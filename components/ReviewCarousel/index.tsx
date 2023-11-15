'use client'
import useSwipe from "@/lib/hooks/use-swipe-gesture";
import { wrappedSlice } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export type ReviewProps = {
    name: string;
    content: string;
    image: string;
    position: string;
}
function ReviewCarousel({ reviews }: { reviews: ReviewProps[] }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentDisplay, setCurrentDisplay] = useState<ReviewProps[]>([]);
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
    };

    const swipehandlers = useSwipe({ onSwipedLeft: prevSlide, onSwipedRight: nextSlide })

    return (<>

        <div className='relative p-5' {...swipehandlers}>
            <div className="flex gap-10 p-5 px-10">
                {wrappedSlice(reviews, currentIndex, currentIndex+1).map((review, index)=>
                
                <div key={index} className="flex-1 p-5 rounded-lg bg-[#ffffff0e] border-4 border-[#AAC3F5] relative text-center justify-center mt-10 lg:px-10 pb-10 grid grid-cols-12 grid-rows-2">
                    <Image
                        src={review.image} // Replace with the actual profile image URL
                        alt={`${review.name}'s Profile`}
                        className="w-12 h-12 rounded-full object-cover col-span-1"
                        height={300}
                        width={300}
                    />
                    <div className="ml-4 w-full col-span-11 text-left">
                        <h3 className="text-lg font-semibold">{review.name}</h3>
                        <h3 className="text-guru-blue">{review.position}</h3>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="mx-auto text-xl z-20  col-span-11 text-left">
                        {review.content}
                    </div>
                </div>
                
                )
                
                
                
                }
            </div>


            <div
                className="absolute top-1/2 left-2 transform -translate-y-1/2  text-white p-2 cursor-pointer"
                onClick={prevSlide}
            >
                <ChevronLeft className="text-guru-blue" />

            </div>
            <div
                className="absolute top-1/2 right-2 transform -translate-y-1/2  text-white p-2   cursor-pointer"
                onClick={nextSlide}
            >
                <ChevronRight className="text-guru-blue" />
            </div>
        </div>


    </>);
}

export default ReviewCarousel;