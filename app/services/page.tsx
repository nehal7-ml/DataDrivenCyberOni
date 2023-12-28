import ServiceCard from "@/components/services/ServiceCard";
import { getAll } from "@/crud/service";
import prisma from "@/lib/prisma";
import { Image } from "@prisma/client";

async function ServiceList() {
  const data = await getData();

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="sm:text-3l mx-10 my-5 text-5xl capitalize">
          Services
        </div>
      </div>
      <div className="w-full bg-gray-50 dark:bg-zinc-900">
        <div className="container mx-auto ">
          <div className="conatiner mx-10 my-10 flex flex-wrap">
            {data.records.map((service, index) => {
              return (
                <div key={index} className={`w-full p-5 lg:h-96  lg:w-1/2`}>
                  <ServiceCard
                    id={service.id}
                    image={service.image as Image}
                    previewContent={service.previewContent}
                    title={service.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

async function getData() {
  const services = await getAll(0, 0, prisma);

  return services;
}

export default ServiceList;
