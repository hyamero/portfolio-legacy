import React from "react";
import Image from "next/image";
import { projects } from "../utilities/projects";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <div className="bg-transparent min-h-[200vh] py-[300px] flex flex-col justify-between gap-96 items-center px-10">
      <h1 className="lol"></h1>
      {projects.map((img: StaticImageData, i: number) => (
        <div key={i} className="light-overlay">
          <Image
            priority
            src={img}
            alt={img.toString()}
            height={350}
            width={640}
          />
        </div>
      ))}
    </div>
  );
};
