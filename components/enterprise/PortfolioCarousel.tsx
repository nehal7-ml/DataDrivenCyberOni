'use client'
import Image from "next/image"
import Link from "next/link"
import React, { useState } from 'react'
import { Image as CaseImage, CaseStudy } from "@prisma/client"
import { DisplayServiceDTO } from "@/crud/service"
import { ArrowBigRight, ArrowRight, ArrowRightToLine, MoveRight, X } from "lucide-react"
import { seoUrl } from "@/lib/utils"
import ImageWithTextOverlay from "../shared/ImageWithTextOverlay"
import Modal from "../shared/modal"
function PortfolioCarousel({ services }: { services: DisplayServiceDTO[] }) {
    const [currentGrid, setCurrentGrid] = useState(services[0].CaseStudies || []);

    const [openModal, setOpenModal] = useState(false);
    const [current, setCurrent] = useState<CaseStudy | null>(null);
    return (
        <div className="container mx-auto flex flex-col px-5 lg:flex-row lg:justify-start  justify-center lg:my-20 my-10">

            <div className="flex justify-start max-w-full overflow-x-auto gap-5 lg:overflow-hidden lg:gap-10 lg:flex-col lg:w-1/3 text-right lg:text-4xl lg:px-10">
                {

                    services.map((service, index) => (

                        <div key={index} className="focus:text-[#5380EA] cursor-pointer hover:underline  flex justify-center items-center gap-2">
                            <button onClick={() => setCurrentGrid(service.CaseStudies || [])} className="peer peer/item focus:text-[#5380EA]">{service.title}
                            </button>
                            <MoveRight className="h-full w-10 hidden lg:peer-focus:block peer-focus:text-[#5380EA]" />
                        </div>

                    ))


                }
            </div>

            {

                <div className="flex-wrap flex lg:w-2/3">
                    {currentGrid?.map((caseStudy, index) => {
                        return (
                            <div key={index} className={`aspect-square rounded-lg overflow-hidden  w-1/2 p-3 lg:w-1/4`}>
                                <div className="relative w-full h-full  rounded-lg overflow-hidden " >
                                    <ImageWithTextOverlay modal={<ReadMoreModal link={`/casestudies/${seoUrl(caseStudy.title, caseStudy.id)}`} heading={caseStudy.title} points={caseStudy.userProblems as string[]} />}
                                        title={caseStudy.userProblems && (caseStudy.userProblems as string[])[0] ? (caseStudy.userProblems as string[])[0] : caseStudy.title}
                                        image={`${caseStudy.images && (caseStudy.images as CaseImage[])[0] ? (caseStudy.images as CaseImage[])[0].src : `https://picsum.photos/200?random=1`}`}
                                        width={400}
                                        height={400} />
                                </div>

                            </div>
                        )
                    }
                    )}


                </div>


            }
        </div>
    )
}

const ReadMoreModal = ({ points, heading, link }: { points: string[], heading: string, link: string }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="">
            <h2>{heading}</h2>
            <ul className="list-disc p-5">
                {points.map((text, index) => (<li key={index}>
                    {text}
                </li>))}
            </ul>
            <div className="text-right">
                <Link className="flex gap-5 hover:text-blue-400 text-center" href={link}>View Details<MoveRight /></Link>
            </div>
        </div>
    )
}


export default PortfolioCarousel