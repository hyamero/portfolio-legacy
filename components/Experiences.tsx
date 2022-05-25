import React from "react";
import Image from "next/image";
import { projects } from "../utilities/projects";
import { Footer } from "./Footer";

export const Experiences: React.FC = ({}) => {
  return (
    <section
      data-scroll-section
      id="projects"
      className=" relative z-[8] mt-[50px] flex min-h-[200vh] flex-col items-center justify-between gap-96 overflow-hidden bg-black px-10 pt-[150px]  pb-[300px] sm:gap-52 sm:py-[200px]"
    >
      {projects.map((project: any, i: number) => (
        <React.Fragment key={project.title}>
          <span
            data-scroll
            data-scroll-speed={7 + i}
            data-scroll-direction="horizontal"
            className="text-clamp pointer-events-none relative z-[3] select-none whitespace-nowrap font-playfair text-9xl italic text-white/25"
          >
            {project.title} <span className="relative top-3">*</span>{" "}
            {project.title} <span className="relative top-3">*</span>{" "}
            {project.title}{" "}
            <span className="relative top-3 animate-spin">*</span>{" "}
            {project.title} <span className="relative top-3">*</span>{" "}
            {project.title} <span className="relative top-3">*</span>{" "}
            {project.title} <span className="relative top-3">*</span>{" "}
            {project.title} <span className="relative top-3">*</span>
          </span>
          <a
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed={7 + i}
            key={i}
            className="clip-0 img cursor-pointer overflow-hidden"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            <div data-scroll data-scroll-speed={2} className="relative">
              <Image
                priority
                src={project.img}
                alt={project.title}
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
                {project.title}
              </span>
            </div>
          </a>
        </React.Fragment>
      ))}
    </section>
  );
};
