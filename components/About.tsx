import React from "react";
import Image from "next/image";

import headimg from "../public/img/daleb.jpg";

interface EmptyProps {}

export const About: React.FC<EmptyProps> = ({}) => {
  return (
    <div className="h-screen bg-dark font-helvetica container relative overflow-y-hidden">
      <h4 className="text-light text-center w-[80%] mx-[auto] pt-20 pb-14 border-b-[1px] border-[#353535] tracking-wider">
        ABOUT
      </h4>
      <p className="text-ylw-100 text-md text-center w-[70%] mx-auto mt-14">
        MY NAME IS{" "}
        <span className="font-druk tracking-widest">JOSEPH DALE BAÑARES</span>{" "}
        AND I’M A WEB DEVELOPER BASED IN THE PHILIPPINES. I AM A UI/UX DESIGNER
        AND A FULL STACK WEB DEVELOPER. I AM A REACT.JS ENTHUSIAST AND I LIKE TO
        CREATE ELEGANT, RESPONSIVE WEBSITES.{" "}
      </p>
      <div>MARQUEE</div>
    </div>
  );
};
