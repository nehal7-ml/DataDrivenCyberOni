'use client'
import Image from "next/image"
import Link from "next/link"
import React, { useState } from 'react'
import { Image as CaseImage } from "@prisma/client"
import { DisplayServiceDTO } from "@/crud/service"
import { MoveRight } from "lucide-react"
function PortfolioCarousel({ services }: { services: DisplayServiceDTO[] }) {
    const [currentGrid, setCurrentGrid] = useState(services[0].CaseStudies);


    return (
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-start  justify-center lg:my-20 my-10">

            <div className="flex justify-center lg:gap-10 lg:justify-start lg:flex-col lg:w-1/3 text-right lg:text-4xl lg:px-10">
                {

                    services.map((service, index) => (

                        <div key={index} className="focus:text-[#5380EA] cursor-pointer hover:underline  flex justify-center items-center gap-2">
                            <button onClick={()=>setCurrentGrid(service.CaseStudies)} className="peer peer/item focus:text-[#5380EA]">{service.title}
                            </button>
                            <MoveRight className="h-full w-10 hidden lg:peer-focus:block peer-focus:text-[#5380EA]" />
                        </div>

                    ))


                }
            </div>

            {

                <div className="flex-wrap flex lg:w-2/3">
                    {currentGrid.map((caseStudy, index) => {
                        return (
                            <div key={index} className={`rounded-2xl aspect-square  w-1/2 p-3 overflow-hidden lg:w-1/4`}>
                                <Link className="w-full h-full " href={`/casestudy/${caseStudy.id}`}>
                                    <Image className="rounded-lg" src={`${caseStudy.images ? (caseStudy.images as CaseImage[])[0].src : `https://picsum.photos/200?random=1`}`} alt="" height={400} width={400} />
                                </Link>
                            </div>
                        )
                    }
                    )}
                </div>


            }
        </div>
    )
}

export default PortfolioCarousel