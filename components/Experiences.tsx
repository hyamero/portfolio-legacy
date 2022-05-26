import React from "react";
import Image from "next/image";
import { academics } from "../utilities/academics";

export const Experiences: React.FC = ({}) => {
  return (
    <section
      data-scroll-section
      id="projects"
      className=" relative z-[8] mt-[50px] flex min-h-[200vh] flex-col items-center justify-between gap-96 overflow-hidden bg-black px-10 pt-[150px]  pb-[300px] sm:gap-52 sm:py-[200px]"
    >
      {academics.map((academic: any, i: number) => (
        <React.Fragment key={academic.title}>
          <span
            data-scroll
            data-scroll-speed={7 + i}
            data-scroll-direction="horizontal"
            className="text-clamp pointer-events-none relative z-[3] select-none whitespace-nowrap font-playfair text-9xl italic text-white/25"
          >
            {academic.title} <span className="relative top-3">*</span>{" "}
            {academic.title} <span className="relative top-3">*</span>{" "}
            {academic.title}{" "}
            <span className="relative top-3 animate-spin">*</span>{" "}
            {academic.title} <span className="relative top-3">*</span>{" "}
            {academic.title} <span className="relative top-3">*</span>{" "}
            {academic.title} <span className="relative top-3">*</span>{" "}
            {academic.title} <span className="relative top-3">*</span>
          </span>
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed={7 + i}
            key={i}
            className="clip-0 img overflow-hidden"
          >
            <div data-scroll data-scroll-speed={2} className="relative">
              <Image
                priority
                src={academic.img}
                alt={academic.title}
                height={405}
                width={720}
                quality={90}
                className="z-[9] rounded"
              />
              <span
                data-scroll
                data-scroll-speed={-2}
                data-scroll-direction="horizontal"
                className="text-clamp absolute bottom-5 left-20 z-[10] whitespace-nowrap font-playfair italic text-white mix-blend-difference"
              >
                {academic.title}
              </span>
              <p className="sub-text text-ylw-grad absolute -bottom-5 right-0 text-left">
                {academic.desc}
              </p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};
