import ReviewCarousel from "@/components/ReviewCarousel";
import ServiceCard from "@/components/services/ServiceCard";
import { DisplayServiceDTO, getAll, read } from "@/crud/service";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";
import FloatingImageSection from "@/components/shared/floating-long";
import Faqs from "@/components/Faqs";
import PayLater from "@/components/shared/Paylater";
import { Image as CaseImage, Image as ServiceImage } from "@prisma/client";
import Link from "next/link";
import EmailLetter from "@/components/home/EmailLetter";
import SubServiceCarousel from "@/components/services/SubServiceCarousel";
export let metadata: Metadata = {
    title: "",
    description: "",
    openGraph: {},
    category: 'service'
};
async function Services({ params }: { params: { id: string } }) {
    const service = await read(params.id, prisma) as DisplayServiceDTO
    const services = await getAll(1, 10, prisma);
    console.log(service);
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
          {services.records.slice(0, 4).map((service, index) => (
            <div key={index} className="p-5 lg:w-1/4">
              <ServiceCard
                id={service.id}
                image={service.image as ServiceImage}
                previewContent={service.previewContent}
                title={service.title}
              />
            </div>
          ))}
        </div>

        <section id="description" className="py-5  font-nunito">
          <div className="text-center text-6xl font-bold">{service.title}</div>
          {service?.ServiceDescription?.map((section, index) => (
            <FloatingImageSection key={index} section={section} />
          ))}
        </section>

        <section className="my-5 font-nunito"></section>

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

        {service.SubServices && (
          <section className="my-5 font-nunito">
            <SubServiceCarousel
              subservices={service.SubServices.map((subservice) => ({
                content: subservice.description,
                title: subservice.title,
                image: subservice.image ? subservice.image.src : "",
              }))}
            />
          </section>
        )}
        {service.CaseStudies.length > 0 ? (
          <section className="my-5 font-nunito">
            <div className="text-center text-4xl font-bold">Portfolio</div>

            {service.CaseStudies.map((caseStudy, index) => (
              <div
                key={index}
                className="container mx-auto my-5 flex flex-wrap gap-2 lg:gap-5"
              >
                <Link
                  href={`/casestudies/${caseStudy.id}`}
                  className="relative w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl lg:w-[170px]"
                >
                  <Image
                    className="aspect-square object-fill"
                    height={170}
                    width={170}
                    alt="case image"
                    src={
                      caseStudy.images
                        ? (caseStudy.images as CaseImage[])[0].src
                        : "https://picsum.photos/200"
                    }
                  />
                  <div className="absolute bottom-0 line-clamp-1 w-full bg-gradient-to-t from-black to-black/0 py-5  text-center text-white">
                    {caseStudy.title}
                  </div>
                </Link>
              </div>
            ))}
          </section>
        ) : (
          <></>
        )}
        <section className="my-5 font-nunito">
          <div className="text-center text-4xl font-bold">
            Frequently Asked Questions
          </div>

          <Faqs faqs={faqs} />
        </section>
        <section className="container mx-auto my-10 font-nunito lg:h-[300px]">
          <EmailLetter />
        </section>
        <section className="flex items-center justify-center">
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