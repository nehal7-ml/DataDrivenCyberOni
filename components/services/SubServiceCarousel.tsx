'use client'
import useSwipe from "@/lib/hooks/use-swipe-gesture";
import useWindowSize from "@/lib/hooks/use-window-size";
import { wrappedSlice } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export type SubServiceProps = {
    title: string;
    content: string;
    image: string;
}
function SubServiceCarousel({ subservices }: { subservices: SubServiceProps[] }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentDisplay, setCurrentDisplay] = useState<SubServiceProps[]>([]);
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % subservices.length);
    };

    const { isMobile, isDesktop } = useWindowSize()
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + subservices.length) % subservices.length);
    };

    const swipehandlers = useSwipe({ onSwipedLeft: prevSlide, onSwipedRight: nextSlide })

    return (<>

        <div className='relative lg:p-5 ' {...swipehandlers}>
            <div className="font-bold text-4xl text-center my-10">Service Add-ons</div>
            <div className="bg-purple-200 ">
                <div className="relative flex flex-col lg:flex-row gap-10 p-5 lg:px-10 justify-center">
                    {wrappedSlice(subservices, currentIndex,isMobile? currentIndex + 2: 0).map((subservice, index) =>
                        <div key={index} className="flex flex-col lg:w-1/3 p-8 rounded-xl bg-gray-100 border-4 border-[#AAC3F5] relative text-center justify-center mt-10 lg:px-10 pb-10 ">
                            <div className=" w-full text-left h-fit">
                                <h3 className="text-lg font-semibold">{subservice.title}</h3>
                            </div>
                            <div className="mx-auto z-20  text-left">
                                {subservice.content}
                            </div>
                            <Image
                                src={subservice.image || "https://picsum.photos/200?random=10"} // Replace with the actual profile image URL
                                alt={`${subservice.name}'s Profile`}
                                className="w-12 h-12  object-cover lg:col-span-1 col-span-2"
                                height={300}
                                width={300}
                            />
                        </div>
                    )
                    }

                </div>

                <div className="w-full flex flex-row justify-between px-10">
                    <div
                        className="  text-white p-2 cursor-pointer bg-purple-500/70 rounded-xl"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="text-guru-blue" />
                    </div>
                    <div
                        className="  text-white p-2   cursor-pointer bg-purple-500/70 rounded-xl"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="text-guru-blue" />
                    </div>
                </div>
            </div>



        </div>


    </>);
}

export default SubServiceCarousel;