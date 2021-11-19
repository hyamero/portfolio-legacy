import React from "react";
import Image from "next/image";
import { projects } from "../utilities/projects";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <div className="bg-transparent min-h-[200vh] py-[300px] flex flex-col justify-between gap-96 items-center px-10">
      <h1 className="lol"></h1>
      {projects.map((project: any, i: number) => (
        <div key={i} className="light-overlay relative">
          <Image
            priority
            src={project.img}
            alt={project.title}
            height={350}
            width={640}
          />
          <p className="font-druk text-4xl text-outline text-dark text-center">
            {project.title}
          </p>
        </div>
      ))}
    </div>
  );
};
