"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CategoryChip from "./CategroryChip";
import SoftwareCard from "./SoftwareCard";
import { useRouter, useSearchParams } from "next/navigation";

function SoftwareCarousel({
  softwareProducts,
}: {
  softwareProducts: {
    image: string;
    title: string;
    subTitle: string;
    pageLink?: string | null;
    codeLink?: string | null;
  }[];
}) {

  // const router = useRouter()
  // const searchParams = useSearchParams();
  // const categoryItem = useRef<HTMLDivElement| null> (null)


  return (

    <>

      <div className="flex w-full items-center justify-center px-10  lg:col-span-2" id="SoftwareCarousel">
        <Carousel className="w-full ">
          {softwareProducts.length > 0 ? <CarouselContent>
            {softwareProducts.map((product, index) => (
              <CarouselItem key={index} className="basis-auto">
                <SoftwareCard
                  image={product.image}
                  title={product.title}
                  subTitle={product.subTitle}
                  pageLink={product.pageLink}
                  codeLink={product.codeLink}
                />
              </CarouselItem>
            ))}


          </CarouselContent>
            : <div className="text-gray-400 w-full text-center">No products Available</div>

          }

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default SoftwareCarousel;
