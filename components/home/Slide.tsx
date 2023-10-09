import Image from "next/image";
import React from 'react'

export type SlideProps = {
    image: string;
    name: string;
    content: string;
    designation: string;


}
function Slide({ image, name, content, designation }: SlideProps) {
    return (
        <div className="flex flex-col gap-5 justify-center items-center lg:flex-row mx-10 p-10">
            <div className="rounded-[15%] shadow-left-shift-lg bg-gradient-purple m-4 p-0.5 h-60 w-60  overflow-hidden">
                <Image className="rounded-[15%] w-full h-full object-cover" src={image} alt={name}  width={500} height={500}></Image>
            </div>
            <div className="mx-10 flex-1 lg:h-60 flex flex-col justify-center">
                <div className="whitespace-pre-line my-2 text-lg text-center lg:text-left">{content}</div>
                <div className="my-2 text-center lg:text-left">{name}</div>
                <div className="my-2 text-center lg:text-left">{designation}</div>
            </div>

        </div>

    )
}

export default Slide