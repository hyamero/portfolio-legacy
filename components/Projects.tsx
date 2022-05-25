import React from "react";
import Image from "next/image";
import { projects } from "../utilities/projects";

export const Projects: React.FC = ({}) => {
  return (
    <section
      data-scroll-section
      id="projects"
      className=" relative z-[8] flex min-h-[200vh] flex-col items-center justify-between gap-96 overflow-hidden bg-white px-10 pt-[500px] pb-[300px] sm:gap-52 sm:py-[200px]"
    >
      <h3
        data-scroll
        data-scroll-speed={-3}
        className="absolute top-5 font-syne text-lg font-bold uppercase text-black/50 sm:-top-20"
      >
        Projects
      </h3>
      {projects.map((project: any, i: number) => (
        <React.Fragment key={project.title}>
          <span
            data-scroll
            data-scroll-speed={7 + i}
            data-scroll-direction="horizontal"
            className="text-clamp pointer-events-none relative z-[3] select-none whitespace-nowrap font-playfair text-9xl italic text-black/25"
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
