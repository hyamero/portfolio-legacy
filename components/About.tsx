import React from "react";
import { useGlobal } from "../utilities/GlobalContext";
import { Marquee } from "./Marquee";
import flower from "../public/img/flower-morales.jpg";

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
      className="px-[200px] lg:px-[50px] max-w-[1920px] mx-auto min-h-[105vh] bg-black font-helvetica relative overflow-hidden sm:block sm:min-h-[75vh]"
    >
      <h4 className="z-10 relative borderline w-[100%] mx-[auto] pt-40 md:pt-10 md:text-xs sm:mb-20 pb-14 sm:pb-5  tracking-wider">
        ABOUT
      </h4>
      <div className="w-[70%] sm:w-full">
        <div className="z-10 relative about-text flex flex-col items-between justify-center gap-10 sm:gap-0">
          <h2 className="sub-text whitespace-nowrap text-ylw-100 text-left text-base uppercase sm:text-xs sm:text-left mt-20 sm:mt-0 sm:mb-0 sm:-translate-y-1/2 ">
            {" "}
            <span className="text-sub"> Hey, I&apos;m</span> <br />
            <span className="font-sprat text-4xl sm:text-2xl font-normal text-ylw-200">
              Joseph Dale Bañares
            </span>
          </h2>
          <p className="sub-text whitespace-normal text-ylw-100 text-left uppercase mb-20 sm:text-xs sm:text-left sm:mt-0 sm:mb-10 w-[80%] md:mb-10 sub-text">
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
            className="uppercase rounded-[100%] border-[0.5px] border-white text-white text-xs md:text-[0.6rem] w-40 h-40 md:w-28 md:h-28 mx-auto text-center flex justify-center items-center tracking-widest transition-all mix-blend-difference mb-20"
          >
            contact
          </a>
        </div>
      </div>
      <img
        data-scroll
        data-scroll-speed={2}
        src={image}
        alt="image by Jocelyn Morales"
        className="z-[9] w-[38rem] sm:w-[20rem] rounded-tr-full rounded-tl-full -bottom-36 sm:-bottom-24 absolute right-0"
      />
      {/* <Marquee /> */}
    </section>
  );
};
