import React from "react";
import Image from "next/image";
import { projects } from "../utilities/projects";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <div
      id="projects"
      className=" min-h-[200vh] py-[300px] flex flex-col justify-between gap-96 items-center px-10 relative"
    >
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#projects"
        className="filled-text z-[-1] max-w-[1920px] absolute top-[2rem]"
      ></div>
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#projects"
        className="stroke-text z-[3] max-w-[1920px] mix-blend-exclusion absolute top-[2rem]"
      ></div>
      {projects.map((project: any, i: number) => (
        <a key={i} className="cursor-pointer z-[2]" href={project.link}>
          <Image
            priority
            src={project.img}
            alt={project.title}
            height={350}
            width={640}
          />
        </a>
      ))}
    </div>
  );
};
