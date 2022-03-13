import React from "react";
import Image from "next/image";
import { projects } from "../utilities/projects";

export const Projects: React.FC = ({}) => {
  return (
    <section
      data-scroll-section
      id="projects"
      className=" relative z-[8] flex min-h-[200vh] flex-col items-center justify-between gap-96 overflow-hidden bg-white py-[300px] px-10 sm:gap-20 md:py-[50px]"
    >
      {/* <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#projects"
        className="filled-text absolute top-0 z-[-1] h-[110vh] max-w-[1920px] sm:h-[50vh]"
      />
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#projects"
        className="stroke-text absolute top-0 z-[3] h-[110vh] max-w-[1920px] mix-blend-exclusion sm:h-[50vh]"
      /> */}

      {/* <span
        data-scroll
        data-scroll-speed={-2}
        data-scroll-direction="horizontal"
        className="relative z-[3] whitespace-nowrap font-playfair text-9xl italic text-black/25"
      >
        projects <span>*</span> projects <span>*</span> projects <span>*</span>{" "}
        projects <span>*</span> projects <span>*</span>
      </span> */}

      {projects.map((project: any, i: number) => (
        <>
          <span
            data-scroll
            data-scroll-speed={-2}
            data-scroll-direction="horizontal"
            className="text-clamp pointer-events-none relative z-[3] select-none whitespace-nowrap font-playfair text-9xl italic text-black/25"
          >
            {project.title} <span className="relative top-3">*</span>{" "}
            {project.title} <span className="relative top-3">*</span>{" "}
            {project.title}{" "}
            <span className="relative top-3 animate-spin">*</span>{" "}
            {project.title} <span className="relative top-3">*</span>{" "}
            {project.title} <span className="relative top-3">*</span>
          </span>
          <a
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed={5 + i}
            key={i}
            className="clip-0 img cursor-pointer overflow-visible"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            <div
              data-scroll
              data-scroll-speed={2}
              data-scroll-delay={1}
              className="relative"
            >
              <Image
                priority
                src={project.img}
                alt={project.title}
                height={410}
                width={740}
                quality={100}
                placeholder="blur"
                className="z-[9] rounded"
              />
              <span
                data-scroll
                data-scroll-speed={2}
                data-scroll-direction="horizontal"
                className="absolute left-0 top-1/2 z-[9] font-playfair text-9xl italic text-black mix-blend-exclusion"
              >
                0{i + 1}
              </span>
              <span
                data-scroll
                data-scroll-speed={-2}
                data-scroll-direction="horizontal"
                className="text-clamp absolute bottom-5 left-10 z-[10] font-playfair italic text-white mix-blend-difference"
              >
                {project.title}
              </span>
            </div>
          </a>
        </>
      ))}
    </section>
  );
};
