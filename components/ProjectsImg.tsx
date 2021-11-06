import React from "react";
import Image from "next/image";

import { projects } from "../utilities/projects";

interface ProjectsImgProps {}

export const ProjectsImg: React.FC<ProjectsImgProps> = ({}) => {
  return (
    <section className="z-[-2] absolute top-[300vh] min-h-[200vh]">
      {projects.map((img: StaticImageData, i: number) => (
        <div key={i} className="light-overlay">
          {/* <img src={img.src} alt="asdf" className="white-overlay" /> */}
          <Image src={img} alt={img.toString()} height={350} width={640} />
        </div>
      ))}
    </section>
  );
};
