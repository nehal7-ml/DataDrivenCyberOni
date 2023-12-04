'use client'

import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode } from "react";

const AccordionItem = ({ item: item, isOpen, toggleAccordion }: { item: { title: string, content: string, icon: ReactNode }, isOpen: boolean, toggleAccordion: () => void }) => {
    return (
        <div className="mb-4  ">
            <div
                className="flex justify-start gap-4 items-center p-4 cursor-pointer"
                onClick={toggleAccordion}
            >
                <div className={``}>
                    {item.icon}
                </div>
                <div className="flex flex-row w-full justify-between">
                    <div className="text-xl">{item.title}</div>
                    {isOpen? <ChevronUp/>: <ChevronDown/>}
                </div>
            </div>
         
                <div className={`${isOpen? 'flex flex-row': 'hidden'} px-4 h-fit transition-all duration-300`}>
                    <div className="w-1 rounded-full bg-service-green"></div>
                    <p className="px-4">{item.content}</p>
                </div>
            

        </div>
    );
};

export default AccordionItem