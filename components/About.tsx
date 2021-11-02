import React from "react";
import Image from "next/image";

import headimg from "../public/img/daleb.jpg";

interface EmptyProps {}

export const About: React.FC<EmptyProps> = ({}) => {
  return (
    <div className="h-screen bg-dark font-helvetica container relative">
      <h4 className="text-light text-center pt-20 pb-14 border-b-[1px] border-[#353535] w-[80%] mx-[auto]">
        ABOUT
      </h4>
      <h1 className="font-sprat font-black text-ylw-200 text-[10rem] text-center">
        DALE B.
      </h1>
      <p className="text-ylw-100 text-md text-left w-[50%] ml-[80px]">
        MY NAME IS JOSEPH DALE BAÑARES AND I’M A WEB DEVELOPER BASED IN THE
        PHILIPPINES. I AM A UI/UX DESIGNER AND A FULL STACK WEB DEVELOPER. I AM
        A REACT.JS ENTHUSIAST AND I LIKE TO CREATE ELEGANT, RESPONSIVE WEBSITES.{" "}
      </p>
      <div className="absolute right-[350px] bottom-[-10rem] overflow-hidden inline-block rounded-t-full max-w-[320px]">
        <img src={headimg.src} alt="Picture of Dale B." />
        {/* <Image
          src={headimg}
          alt="Dale B. picture"
          objectFit="contain"
          height={500}
        /> */}
      </div>
    </div>
  );
};
