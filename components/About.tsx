import React from "react";

import { codeTechs, designTechs } from "../utilities/techs";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <section className="min-h-[130vh] bg-dark font-helvetica relative overflow-y-hidden">
      <div className="container">
        <h4 className="text-light text-center w-[80%] mx-[auto] pt-20 pb-14 border-b-[1px] border-[#353535] tracking-wider">
          ABOUT
        </h4>
        <p className="text-ylw-100 text-md text-center w-[70%] mx-auto mt-14 mb-40">
          MY NAME IS{" "}
          <span className="font-druk tracking-widest">JOSEPH DALE BAÑARES</span>{" "}
          AND I’M A WEB DEVELOPER BASED IN THE PHILIPPINES. I AM A UI/UX
          DESIGNER AND A FULL STACK WEB DEVELOPER. I AM A REACT.JS ENTHUSIAST
          AND I LIKE TO CREATE ELEGANT, RESPONSIVE WEBSITES.{" "}
        </p>
        <div className="text-light py-14 my-20 border-t-[1px] border-b-[1px] border-[#353535] text-center">
          TECHNOLOGIES I USE
        </div>
      </div>

      <div className="flex  justify-between space-x-20 text-6xl uppercase font-druk">
        {codeTechs.map((tech: any) => (
          <div className="text-light">{tech}</div>
        ))}
      </div>

      <div className="flex justify-between text-6xl uppercase font-helvetica mb-30">
        {designTechs.map((tech: any) => (
          <div className="text-light">{tech}</div>
        ))}
      </div>
    </section>
  );
};
