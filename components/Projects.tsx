import React from "react";
import Image from "next/image";
import { projects } from "../utilities/projects";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <section
      data-scroll-section
      id="projects"
      className=" min-h-[200vh] py-[300px] flex flex-col justify-between gap-96 items-center px-10 relative"
    >
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#projects"
        className="filled-text z-[-1] max-w-[1920px] absolute top-0"
      ></div>
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#projects"
        className="stroke-text z-[3] max-w-[1920px] mix-blend-exclusion absolute top-0"
      ></div>
      {projects.map((project: any, i: number) => (
        <a
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={0.6 + i}
          key={i}
          className="cursor-pointer z-[2] overflow-hidden "
          href={project.link}
        >
          <div data-scroll data-scroll-speed={1} className="relative">
            <Image
              priority
              src={project.img}
              alt={project.title}
              height={350}
              width={640}
              quality={100}
              placeholder="blur"
              className="transition-transform ease-out duration-300 hover:scale-110 hover:opacity-80"
            />
          </div>
          <p className="font-helvetica text-3xl uppercase absolute bottom-8 left-8 text-white mix-blend-difference whitespace-nowrap space-x-8">
            <span>{project.title}</span>
          </p>
        </a>
      ))}
    </section>
  );
};
