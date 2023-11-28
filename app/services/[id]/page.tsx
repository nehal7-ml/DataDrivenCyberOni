import ReviewCarousel from "@/components/ReviewCarousel";
import ServiceCard from "@/components/services/ServiceCard";
import { DisplayServiceDTO, getAll, read } from "@/crud/service";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";
import FloatingImageSection from "@/components/shared/floating-long";
import Faqs from "@/components/Faqs";
import PayLater from "@/components/shared/Paylater";
import { Image as ServiceImage } from "@prisma/client";
export let metadata: Metadata = {
    title: "",
    description: "",
    openGraph: {},
    category: 'service'
};
async function Services({ params }: { params: { id: string } }) {
    const service = await read(params.id, prisma) as DisplayServiceDTO
    const services = await getAll(1, 10, prisma);
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
                {services.records.map((service, index) => (
                    <div key={index} className="p-5 lg:w-1/4">
                        <ServiceCard
                            id={service.id}
                            image={
                                service.image as ServiceImage
                            }
                            previewContent={service.previewContent}
                            title={service.title}
                        />
                    </div>
                ))}
            </div>

            <section className="py-5">
                {service?.ServiceDescription?.map((section, index) => (
                    <FloatingImageSection key={index} section={section} />
                ))}
            </section>

            <section className="my-5 font-nunito">
                <div className="text-center font-nunito text-4xl font-semibold">
                    Feedback from our clients
                </div>
                <div className="text-center text-lg font-light">
                    Our WORK speaks louder than our WORD. Find out how we helped clients
                    overcome challenges and succeed.
                </div>
                <ReviewCarousel
                    reviews={[
                        {
                            content:
                                "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
                            image: "/prof1.png",
                            name: "Charlie rose",
                            position: "Ceo",
                        },
                        {
                            content:
                                "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
                            image: "/prof2.png",
                            name: "Charlie rose",
                            position: "Ceo",
                        },
                    ]}
                />
            </section>
            <section className="my-5 font-nunito">
                <Faqs faqs={faqs} />
            </section>
            <section className="flex justify-center items-center">
                <PayLater value={service.valueBrought as string[]} />
            </section>
        </div>
    );
}

const faqs = [
    {
        question: 'What is React?',
        answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
        question: 'How to install React?',
        answer: 'You can install React using npm or yarn.',
    },
    // Add more FAQs as needed
];

export default Services;