"use client";
import Image from "next/image";
import React, { ReactNode, useEffect } from "react";
import { useAnimate, useInView } from "framer-motion";

export type SectionProps = {
  title: string;
  subTitle: string;
  content: ReactNode;
  image: string;
  imageFirst?: boolean;
};

const Section = ({
  title,
  subTitle,
  content,
  image,
  imageFirst = false,
}: SectionProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      // Animate in Y axis
      animate(
        scope.current,
        { y: ["-20px", "20px"] },
        {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        },
      );

      // Animate in X axis
      animate(
        scope.current,
        { x: ["-10px", "10px"] },
        {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        },
      );
    }
  }, [animate, isInView, scope]);

  // Determine the order of text and image based on the imageFirst prop
  const orderClasses = imageFirst ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <section className={`my-5 py-8 lg:py-16`}>
      <div
        className={`container mx-auto flex flex-col items-center justify-center ${orderClasses}`}
      >
        {/* Image */}
        <div
          className={`container mx-auto flex flex-col items-center justify-center ${orderClasses} lg:flex lg:w-1/2 lg:items-center lg:justify-center`}
          ref={scope} // Apply the ref here
        >
          <Image src={image} alt={image} height={500} width={500} />
        </div>
        {/* Text */}
        <div className="p-8 lg:w-1/2">
          <div className="m-3 w-fit bg-gradient-purple bg-clip-text text-5xl font-bold text-transparent">
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

export default Section;
