import React from 'react'
import prisma from "@/lib/prisma";
import { getAll } from "@/crud/service";
import ServiceCard from "@/components/services/ServiceCard";
import { Image } from "@prisma/client";

async function ServiceList() {
    const data = await getData();

    return (
        <div className="">
            <div className="container mx-auto">
                <div className="mx-10 text-5xl my-5 capitalize">
                   Services
                </div>
            </div>
            <div className="w-full bg-gray-50 dark:bg-zinc-900">
                <div className="container mx-auto ">
                    <div className="conatiner mx-10 my-10 flex flex-wrap">
                        {data.records.map((service, index) => {
                            return (
                                <div key={index} className={`w-full lg:w-1/2 p-5  lg:h-96`}>
                                    <ServiceCard id={service.id}
                                        image={service.image as Image}
                                        previewContent={service.previewContent}
                                        title={service.title}
                                    />
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

async function getData() {

    const services = await getAll(0, 0, prisma)

    return services

}



export default ServiceList