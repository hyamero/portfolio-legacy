import React from "react";
import Image from "next/image";
import { projects } from "../utilities/projects";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <section
      data-scroll-section
      id="projects"
      className=" min-h-[200vh] py-[300px] md:py-[50px] flex flex-col justify-between gap-96 sm:gap-20 items-center px-10 relative bg-white z-[8]"
    >
      <p className="absolute top-3 left-3 text-sub sub-text font-helvetica whitespace-normal">
        NOTE FOR THE FOLLOWING PROJECTS: I MADE THESE PROJECTS WHEN I WAS JUST
        BEGINNER WEB DEVELOPER. I WILL START MAKING PROJECTS WORTHY OF
        SHOWCASING HERE SOON. PEACE!
      </p>
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#projects"
        className="filled-text z-[-1] max-w-[1920px] absolute top-0 h-screen sm:h-[50vh]"
      ></div>
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#projects"
        className="stroke-text z-[3] max-w-[1920px] mix-blend-exclusion absolute top-0 h-screen sm:h-[50vh]"
      ></div>
      <div className="test w-[160vw] bg-red-600 text-white font-helvetica uppercase rotate-[-30deg] py-5 absolute top-[10%] -left-60 text-4xl whitespace-nowrap">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
        ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className="test w-[150vw] bg-dark text-white font-helvetica uppercase rotate-[30deg] py-5 absolute top-1/2 -left-50 text-4xl whitespace-nowrap">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
        ipsa? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
      <div className="test w-[160vw] bg-ylw-200 text-white font-helvetica uppercase rotate-[-30deg] py-5 absolute top-[70%] -left-30 text-4xl whitespace-nowrap">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
        ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      {projects.map((project: any, i: number) => (
        <a
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={1 + i}
          key={i}
          className="cursor-pointer z-[2] overflow-hidden clip-0 img"
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
