import React from "react";
import Image from "next/image";
import { useGlobal } from "../utilities/GlobalContext";
import { Marquee } from "./Marquee";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  const { aboutRef } = useGlobal();
  const image =
    "https://images.unsplash.com/photo-1615840788094-a4df00dce64b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80";

  return (
    <section
      data-scroll-section
      ref={aboutRef}
      id="about"
      className="px-[200px] lg:px-[50px] max-w-[1920px] mx-auto min-h-screen bg-black font-helvetica relative overflow-hidden sm:block sm:min-h-[70vh]"
    >
      <h4 className="borderline w-[100%] mx-[auto] pt-40 sm:pt-10 md:text-xs sm:mb-20 pb-14 sm:pb-5  tracking-wider">
        ABOUT
      </h4>
      <div className="container flex absolute bottom-0 md:relative left-0">
        <div className="about-text z-10 flex flex-col items-between justify-center gap-10 sm:gap-5">
          <h6 className="sub-text whitespace-nowrap text-ylw-100 text-left text-base mx-auto mt-20 uppercase sm:text-xs sm:text-left sm:mt-0 sm:mb-10 sm:-translate-y-1/2 w-[80%]">
            {" "}
            <span className="text-sub"> Hey, I&apos;m</span> <br />
            <span className="font-sprat text-4xl sm:text-2xl font-normal text-ylw-200">
              Joseph Dale Bañares
            </span>
          </h6>
          <p className="sub-text whitespace-normal text-ylw-100 text-left text-base mx-auto uppercase sm:text-xs sm:text-left sm:mt-0 sm:mb-10 sm:-translate-y-1/2 w-[80%] md:mb-10">
            I&apos;m an eighteen year old front-end web developer based in
            Bacolod City, Philippines. I specialize in creative development and
            I love creating interactive websites. I mainly use react,
            tailwindcss, and gsap in my projects. Outside the virtual world, I
            run, swim, and cycle for fun!
          </p>
          <a
            data-scroll-to
            data-scroll
            data-scroll-speed={0.6}
            href="#contact"
            className="uppercase rounded-[100%] border-[0.5px] border-white text-white text-xs md:text-[0.6rem] w-40 h-40 hover:h-[9.5rem] hover:w-[9.5rem] md:w-28 md:h-28 md:hover:w-[6.5rem] md:hover:h-[6.5rem]  m-auto text-center flex justify-center items-center tracking-widest transition-all"
          >
            contact
          </a>
        </div>
        <img
          data-scroll
          data-scroll-speed={2}
          src={image}
          alt="test"
          className="w-[28rem] max-w-md rounded-tr-full rounded-tl-full relative top-48 md:absolute"
        />
      </div>
      {/* <Marquee /> */}
    </section>
  );
};
