import { getCategories } from "@/crud/categories";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import CategoryChip from "./CategroryChip";
import prisma from "@/lib/prisma";

async function SoftwareCategories() {
    const categories = await getCategories('software', prisma)

  return (
    <div className="flex h-fit gap-2 self-center my-4  px-10 lg:col-span-1">
      <Carousel className="w-full">
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem className="w-fit basis-auto" key={index}>
              <CategoryChip
                key={index}
                id={category.id!}
                name={category.name}
              ></CategoryChip>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}

export default SoftwareCategories;
