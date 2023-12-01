'use client'
import React, { useState } from 'react'
import AccordionItem from "./AccordianItem"

function ServiceFeatures({ features }: { features: { title: string, content: string, icon: React.ReactNode }[] }) {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col justify-center gap-2">
            {features.map((feature, index) => (<div key={index}>
                <div className="mb-4  ">
                    <AccordionItem isOpen={index === openIndex} toggleAccordion={() => toggleAccordion(index)} item={feature} />

                </div>

            </div>))}
        </div>
    )
}

export default ServiceFeatures