'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import useWindowSize from "@/lib/hooks/use-window-size";

export type Company = {
    name: string;
    image: string;
};

function CompanyCarousel({ cards }: { cards: Company[] }) {
    const { isMobile } = useWindowSize();
    const carousel = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isMobile && !isPaused) {
            interval = setInterval(() => {
                if (carousel.current) {
                    const { scrollLeft, scrollWidth, clientWidth } = carousel.current;
                    if (scrollLeft >= scrollWidth - clientWidth) {
                        carousel.current.scrollLeft = 0;
                    } else {
                        carousel.current.scrollLeft += 5;
                    }
                }
            }, 24);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isMobile, isPaused]);

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleResume = () => {
        setIsPaused(false);
    };

    return (
        <>
            <div
                ref={carousel}
                onMouseOver={handlePause}
                onMouseOut={handleResume}
                onClick={handlePause}
                className="relative flex max-w-full overflow-x-auto lg:flex-wrap gap-1 lg:justify-center scrollbar-none items-center object-contain"
            >
                {cards.map((card, index) => (
                    <div key={index} className="flex items-center h-20 w-30 flex-shrink-0 overflow-hidden">
                        <Image key={index} className="object-scale-down p-5" src={card.image} alt={card.name} width={160} height={100} />
                    </div>
                ))}
                {/* Duplicate items for infinite scrolling */}
                {isMobile && cards.map((card, index) => (
                    <div key={index + cards.length} className="flex items-center h-20 w-30 flex-shrink-0 overflow-hidden">
                        <Image className="object-scale-down p-5" src={card.image} alt={card.name} width={160} height={100} />
                    </div>
                ))}
            </div>
            <div className="text-center">Our Technology is <span className="font-bold">Used</span> and <span className="font-bold">Trusted</span> by the world’s most ambitious teams.</div>
        </>
    );
}

export default CompanyCarousel;

