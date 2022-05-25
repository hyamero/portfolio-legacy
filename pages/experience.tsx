import React from "react";
import { Experiences } from "../components/Experiences";
import { Footer } from "../components/Footer";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = ({}) => {
  return (
    <div id="home" className="m-auto h-full  w-screen max-w-[1920px] bg-black">
      <h2 className="text-clamp mt-40 flex max-w-[1920px] justify-center whitespace-nowrap font-sprat font-medium leading-none text-ylw-100">
        <span className="relative left-20">LEARNING</span>
        <span className="text-ylw-grad relative right-20">
          <br /> EXPERIENCE
        </span>
      </h2>
      <Experiences />
      <Footer />
    </div>
  );
};

export default Experience;
