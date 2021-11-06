import React from "react";
import Image from "next/image";
import { projects } from "../utilities/projects";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <section className="bg-transparent min-h-[200vh] py-[100px]">
      {projects.map((img: StaticImageData, i: number) => (
        <div key={i} className="light-overlay">
          <Image src={img} alt={img.toString()} height={350} width={640} />
        </div>
      ))}
    </section>
  );
};
