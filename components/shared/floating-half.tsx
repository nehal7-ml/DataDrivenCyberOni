"use client";
import Image from "next/image";
import React, { ReactNode } from "react";

export type ImageSectionProps = {
  title: string;
  subTitle: string;
  content: ReactNode;
  linkTo: string;
  image: string;
  imageFirst?: boolean;
};

const FloatingHalfSection: React.FC<ImageSectionProps> = ({
  image,
  title,
  subTitle,
  content,
  linkTo,
  imageFirst = false,
}) => {
  const orderClasses = imageFirst ? "lg:flex-row" : "lg:flex-row-reverse";
  const buttonAlignmentClass = imageFirst ? "text-right" : "text-left";

  return (
    <section className="my-5 lg:py-2">
      <div
        className={`container mx-auto flex flex-col items-center justify-center ${orderClasses}`}
      >
        {/* Image */}
        <div className="lg:w-1/2">
          <Image src={image} alt={title} height={500} width={500} />
        </div>
        {/* Text and Button */}
        <div className={`p-8 lg:w-1/2 ${buttonAlignmentClass}`}>
          <div className="sm:text-3l m-3 w-fit bg-gradient-purple bg-clip-text text-5xl font-bold text-transparent">
            {title}
          </div>
          <div className="m-3 text-xl font-bold">{subTitle}</div>
          <div className="m-3">{content}</div>
          <div className="m-3 h-[1px] bg-gradient-purple"></div>
          <button className="m-3 rounded-full bg-gradient-purple p-[1px]">
            <div className="rounded-full bg-white p-3 dark:bg-black ">
              Learn More
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FloatingHalfSection;
