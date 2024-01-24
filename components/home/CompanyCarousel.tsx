import React from 'react'
import Image from "next/image";
export type Company = {
    name: string;
    image: string;
}

function CompanyCarousel({ cards }: { cards: Company[] }) {
    return (
        <>
            <div className="flex flex-wrap gap-1 justify-center items-center">
                {cards.map((card, index)=> {
                    return (
                        <Image key={index} className=" h-20 w-[14%] object-scale-down p-1" src={card.image} alt={card.name} width={70} height={50}></Image>
                    )
                })}
            </div>
            <div className="text-center">Our Technology is <span className="font-bold">Used</span> and <span className="font-bold">Trusted</span> by the world’s most ambitious teams.</div>

        </>
    )
}

export default CompanyCarousel