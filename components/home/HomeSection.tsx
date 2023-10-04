import Image from "next/image";
import React, { ReactNode } from 'react';


export type SectionProps = {
    title: string;
    subTitle: string;
    content: ReactNode;
    image: string;
    imageFirst?: boolean;
}
const Section = ({ title, subTitle, content, image, imageFirst = false }: SectionProps) => {
    // Determine the order of text and image based on the imageFirst prop
    const orderClasses = imageFirst
        ? 'lg:flex-row'
        : 'lg:flex-row-reverse';

    return (
        <section className={`py-8 lg:py-16 my-5`}>
            <div className={`container mx-auto flex flex-col justify-center items-center ${orderClasses}`}>
                {/* Image */}
                <div className="lg:w-1/2 lg:flex lg:justify-center lg:items-center">
                    <Image src={image} alt={image} height={500} width={500}></Image>
                </div>

                {/* Text */}
                <div className="lg:w-1/2 p-8">
                    <div className="w-fit text-transparent bg-clip-text bg-gradient-purple m-3 font-bold text-5xl">{title}</div>
                    <div className="m-3 font-bold text-xl">{subTitle}</div>
                    <div className="m-3">{content}</div>
                    <div className="h-[1px] m-3 bg-gradient-purple" ></div>
                    <button className="rounded-full bg-gradient-purple p-[1px] m-3">
                        <div className="rounded-full p-3 bg-white dark:bg-black ">learn more</div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section;