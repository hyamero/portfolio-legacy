import React from "react";
import Image from "next/image";
import { projects } from "../utilities/projects";

export const Projects: React.FC = ({}) => {
  return (
    <section
      data-scroll-section
      id="projects"
      className=" relative z-[8] flex min-h-[200vh] flex-col items-center justify-between gap-96 bg-white py-[300px] px-10 sm:gap-20 md:py-[50px]"
    >
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#projects"
        className="filled-text absolute top-0 z-[-1] h-[110vh] max-w-[1920px] sm:h-[50vh]"
      ></div>
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#projects"
        className="stroke-text absolute top-0 z-[3] h-[110vh] max-w-[1920px] mix-blend-exclusion sm:h-[50vh]"
      ></div>
      {projects.map((project: any, i: number) => (
        <a
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={5 + i}
          key={i}
          className="clip-0 img z-[2] cursor-pointer overflow-hidden"
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
              className="rounded"
            />
          </div>
        </a>
      ))}
    </section>
  );
};
