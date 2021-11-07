import React from "react";

import { codeTechs, designTechs } from "../utilities/techs";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <section className="container min-h-[130vh] bg-dark font-helvetica relative overflow-hidden">
      <div className="container">
        <h4 className="borderline w-[80%] mx-[auto] pt-20 pb-14 tracking-wider">
          ABOUT
        </h4>
        <p className="text-ylw-100 text-md text-center w-[100%] mx-auto mt-14 mb-40">
          MY NAME IS{" "}
          <span className="font-druk tracking-widest">JOSEPH DALE BAÑARES</span>{" "}
          AND I’M A WEB DEVELOPER BASED IN THE PHILIPPINES. I AM A UI/UX
          DESIGNER AND A FULL STACK WEB DEVELOPER. I AM A REACT.JS ENTHUSIAST
          AND I LIKE TO CREATE ELEGANT, RESPONSIVE WEBSITES.{" "}
        </p>
      </div>

      <div className="borderline py-14 my-20 border-t-[1px]">
        TECHNOLOGIES I USE
      </div>

      {/* MARQUEE codeTechs*/}
      <div className="flex">
        <div className="marquee flex space-x-20 mx-[5rem]">
          {codeTechs.map((tech: any) => (
            <div className="tech-text font-druk">{tech}</div>
          ))}
        </div>

        <div className="marquee2 flex space-x-20">
          {codeTechs.map((tech: any) => (
            <div className="tech-text font-druk">{tech}</div>
          ))}
        </div>
      </div>

      {/* MARQUEE designTechs*/}
      <div className="flex">
        <div className="marqueeR flex space-x-20 mx-[5rem]">
          {designTechs.map((tech: any) => (
            <div className="tech-text font-druk text-ylw-100">{tech}</div>
          ))}
        </div>

        <div className="marqueeR2 flex space-x-20">
          {designTechs.map((tech: any) => (
            <div className="tech-text font-druk text-ylw-100">{tech}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
