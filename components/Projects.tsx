import React from "react";
import Image from "next/image";
import { projects } from "../utilities/projects";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <div className="bg-transparent min-h-[200vh] py-[300px] flex flex-col justify-between gap-96 items-center px-10">
      {projects.map((project: any, i: number) => (
        <a key={i} className="cursor-pointer z-[-2]" href={project.link}>
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
