'use client'
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const AccordionItem = ({ faq, isOpen, toggleAccordion }: { faq: { question: string, answer: string }, isOpen: boolean, toggleAccordion: () => void }) => {
    return (
        <div className="mb-4 border-b-2 ">
            <div
                className="flex justify-start gap-4 items-center p-4 cursor-pointer"
                onClick={toggleAccordion}
            >
                 <div className={`ml-2 `}>
                    {isOpen? <Plus />: <Minus />}
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{faq.question}</div>
                    
                </div>
            </div>
            {isOpen && (
                    <div className="bg-white dark:bg-transparent p-4 ">
                        <p>{faq.answer}</p>
                    </div>
                                )}
            
        </div>
    );
};

function Faqs({ faqs }: { faqs: { question: string, answer: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index}
                    faq={faq}
                    isOpen={index === openIndex}
                    toggleAccordion={() => toggleAccordion(index)}
                />
            ))}
        </div>
    );
}
export default Faqs;