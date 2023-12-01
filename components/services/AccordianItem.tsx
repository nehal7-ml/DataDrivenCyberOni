'use client'

const AccordionItem = ({ item: item, isOpen, toggleAccordion }: { item: { title: string, content: string }, isOpen: boolean, toggleAccordion: () => void }) => {
    return (
        <div className="mb-4 border-b-2 ">
            <div
                className="flex justify-start gap-4 items-center p-4 cursor-pointer"
                onClick={toggleAccordion}
            >
                 <div className={`ml-2 `}>
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{item.title}</div>
                    
                </div>
            </div>
            {isOpen && (
                    <div className="bg-white p-4  border-l-2 border-service-greeen">
                        <p>{item.content}</p>
                    </div>
                                )}
            
        </div>
    );
};