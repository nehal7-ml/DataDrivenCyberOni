"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CategoryChip from "./CategroryChip";
import SoftwareCard from "./SoftwareCard";

function SoftwareCarousel({
  categories,
  softwareProducts,
}: {
  categories: { name: string }[];
  softwareProducts: { image: string; title: string; subTitle: string }[];
}) {
  return (
    <div className="my-5 flex flex-col items-center justify-center gap-2 px-5 lg:px-10">
      <div className="my-10 flex flex-col items-center justify-center gap-5 lg:flex-row">
        <h2 className="font-kyiv text-3xl font-bold lg:w-[12em] lg:text-5xl">
          Choose from over 10+ cutting—edge products
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <CategoryChip key={index} name={category.name}></CategoryChip>
          ))}
        </div>
      </div>

      <div className="flex w-full">
        <Carousel className="w-full ">
          <CarouselContent>
            {softwareProducts.map((product, index) => (
              <CarouselItem key={index} className="basis-auto">
                <SoftwareCard
                  image={product.image}
                  title={product.title}
                  subTitle={product.subTitle}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default SoftwareCarousel;
