import React from "react";
import { useGlobal } from "../utilities/GlobalContext";

import { Marquee } from "./Marquee";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  const { aboutRef } = useGlobal();

  return (
    <div
      ref={aboutRef}
      id="about"
      className="max-w-[1920px] mx-auto min-h-screen bg-dark font-helvetica relative overflow-hidden"
    >
      <div className="container">
        <h4 className="borderline w-[100%] mx-[auto] pt-20 pb-14 tracking-wider">
          ABOUT
        </h4>
        <p className="text-ylw-100 text-md text-center w-[80%] mx-auto mt-14 mb-40">
          MY NAME IS{" "}
          <span className="font-druk tracking-widest">JOSEPH DALE BAÑARES</span>{" "}
          AND I’M A WEB DEVELOPER BASED IN THE PHILIPPINES. I AM A UI/UX
          DESIGNER AND A FULL STACK WEB DEVELOPER. I AM A REACT.JS ENTHUSIAST
          AND I LIKE TO CREATE ELEGANT, RESPONSIVE WEBSITES.{" "}
        </p>
      </div>
      <Marquee />
    </div>
  );
};
