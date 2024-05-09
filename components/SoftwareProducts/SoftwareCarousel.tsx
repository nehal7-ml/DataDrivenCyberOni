"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
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
        <div className="flex flex-col items-center justify-center gap-2 my-5 px-5 lg:px-10">
            <div className="flex my-10 flex-col lg:flex-row justify-center items-center gap-5">
                <h2 className="font-kyiv text-3xl lg:text-5xl font-bold lg:w-[12em]">
                    Choose from over 10+ cutting—edge products
                </h2>
                <div className="flex gap-2 flex-wrap">
                    {categories.map((category, index) => (
                        <CategoryChip
                            key={index}
                            name={category.name}
                        ></CategoryChip>
                    ))}
                </div>
            </div>

            <div className="flex w-full">
                <Carousel className="w-full ">
                    <CarouselContent >
                        {softwareProducts.map((product, index) => (
                            <CarouselItem key={index} className="basis-auto"
                            >
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
