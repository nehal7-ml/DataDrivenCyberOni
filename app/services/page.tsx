import ServiceCard from "@/components/services/ServiceCard";
import { DisplayServiceDTO, getAll, read } from "@/crud/service";
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
    const services = await getAll(1, 10, prisma)  ;
    metadata.title = service.title as string
    metadata.description = service.previewContent
    metadata.openGraph = {
        type: 'website',
        title: service.title,
        description: service.previewContent,
        images: [service.image?.src as string],
    }
    return (

        <div className="">
            <div className="flex flex-wrap">
                {services.records.map((service, index) =><div key={index} className="lg:w-1/4 p-5">

                    <ServiceCard 
                            id={service.id}
                            image={service.image || {src:'https://picsum.photos/200/300?random=1', id:"random", name:"random"}}    
                            previewContent={service.previewContent}
                            title={service.title}                
                    />
                </div> )}
            
            </div>

            <section className="py-5">
                {service?.ServiceDescription?.map((section, index) => {

                    return (
                        <div className={`flex gap-5 w-full my-4 p-2 flex-col ${section.imageOnLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} key={index}>
                            <div className="lg:w-1/3  flex-1 flex justify-center items-center">
                                <Image src={section.image.src} alt={`${index}-section`} height={500} width={500} ></Image>
                            </div>
                            <div className="lg:w-2/3 justify-center flex flex-col">
                                <div className="font-bold text-3xl">{section.title}</div>
                                <div>{section.content}</div>
                            </div>

                        </div>
                    )
                })}


            </section>

            <section className="my-5 font-nunito">
                <div className="text-center text-4xl font-semibold font-nunito">Feedback from our clients</div>
                <div className="text-center font-light text-lg">Our WORK speaks louder than our WORD. Find out how we helped clients overcome challenges and succeed.</div>

            </section>
        </div>

    );
}

export default Services;