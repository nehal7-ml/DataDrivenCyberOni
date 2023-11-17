import { DisplayServiceDTO, read } from "@/crud/service";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";

export let metadata: Metadata = {
    title: "",
    description: "",
    openGraph: {},
    category: 'blog'
};
async function Services() {
    const service = await read("432e1392-4823-4cc5-8886-d116d11a3e91", prisma) as DisplayServiceDTO
    metadata.title = service.title as string
    metadata.description = service.previewContent
    metadata.openGraph = {
        type: 'article',
        title: service.title,
        description: service.previewContent,
        images: [service.image?.src as string],
        tags: service.tags?.map(tag => tag.name)
    }
    return (

        <div className="">
            <section className="container mx-auto flex flex-col lg:flex-row  gap-10 justify-center items-center">
                <div>
                    <div className="text-service-greeen">A TRUSTED COMPANY</div>
                    <div>Next-Gen Software Services to Businesses.</div>
                    <div>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
                </div>

            </section>

            <section className="py-5">
                {service?.ServiceDescription?.map((section, index) => {

                    return (
                        <div className={`flex gap-5 w-full my-4 p-2 ${section.imageOnLeft ? 'flex-row' : 'flex-row-reverse'}`} key={index}>
                            <div className="w-1/3  flex-1">
                                <Image src={section.image.src} alt={`${index}-section`} height={500} width={500} ></Image>
                            </div>
                            <div className="w-2/3 justify-evenly">
                                <div className="font-bold text-3xl">{section.title}</div>
                                <div>{section.content}</div>
                            </div>

                        </div>
                    )
                })}


            </section>
        </div>

    );
}

export default Services;