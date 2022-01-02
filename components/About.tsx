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
      className="max-w-[1920px] mx-auto min-h-screen bg-black font-helvetica relative overflow-hidden flex flex-col"
    >
      <div className="container">
        <h4 className="borderline w-[100%] mx-[auto] pt-20 pb-14 tracking-wider">
          ABOUT
        </h4>
        <p className="sub-text whitespace-normal text-ylw-100 text-md text-center w-[80%] mx-auto mt-14 mb-40">
          MY NAME IS{" "}
          <span className="font-druk tracking-widest">JOSEPH DALE BAÑARES</span>{" "}
          AND I’M A WEB DEVELOPER BASED IN THE PHILIPPINES. I DO CREATIVE
          DEVELOPMENT THAT DEALS 3D ENVIRONMENTS AND UI/UX DESIGN. I USE WEBGL
          USING THREE.JS WITH REACT, AND I LOVE CREATING ELEGANT AND RESPONSIVE
          WEBSITES.{" "}
        </p>
      </div>
      <Marquee />
    </div>
  );
};
