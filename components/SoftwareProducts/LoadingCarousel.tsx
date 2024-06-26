import React from 'react';
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const SkeletonSoftwareCard = () => {
  return (
    <Card className="flex aspect-[3/4] h-auto w-[14em] max-w-sm flex-col items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="h-4/6 w-full animate-pulse bg-gray-300"></div>
      <div className="flex-grow w-full p-2 space-y-2">
        <div className="h-4 w-3/4 animate-pulse bg-gray-200"></div>
        <div className="h-4 w-1/2 animate-pulse bg-gray-200"></div>
      </div>
    </Card>
  );
};

function LoadingCarousel() {
  return (
    <>
    <div className="flex flex-wrap justify-center items-center self-center gap-2 px-5  lg:col-span-1 h-fit">
      <div className="h-14 bg-gray-300 dark:bg-gray-500 w-full animate-pulse rounded-full"></div>
    </div>
    <div className="flex w-full col-span-2">
      <Carousel className="w-full ">
        <CarouselContent>
          {new Array(10).fill(0).map((product, index) => (
            <CarouselItem key={index} className="basis-auto">
              <SkeletonSoftwareCard />
            </CarouselItem>
          ))}


        </CarouselContent>


        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    </>



  );
}

export default LoadingCarousel;