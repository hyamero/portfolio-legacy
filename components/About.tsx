import React from "react";
import { useGlobal } from "../utilities/GlobalContext";

import { Marquee } from "./Marquee";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  const { aboutRef } = useGlobal();

  return (
    <section
      data-scroll-section
      ref={aboutRef}
      id="about"
      className="max-w-[1920px] mx-auto min-h-screen bg-black font-helvetica relative overflow-hidden flex flex-col sm:block sm:min-h-[50vh] "
    >
      <div className="container">
        <h4 className="borderline w-[100%] mx-[auto] pt-20 pb-14 tracking-wider sm:invisible">
          ABOUT
        </h4>
        <p className="sub-text whitespace-normal text-ylw-100 text-center text-base w-[80%] mx-auto mt-14 mb-40 uppercase sm:text-xs sm:text-left sm:mt-0 sm:mb-10 sm:-translate-y-1/2">
          Hey, I&apos;m{" "}
          <span className="font-druk tracking-widest">Joseph Dale Bañares</span>
          , and i&apos;m eighteen years old. I am a front-end web developer
          based in Bacolod City, Philippines, and I am aiming to become a
          creative developer. I mainly use react, and I love creating beautiful
          websites!
        </p>
      </div>
      <Marquee />
    </section>
  );
};
