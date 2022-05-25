import React from "react";
import { Marquee } from "./Marquee";
import Image from "next/image";
import image from "../public/img/dale.jpg";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  // const image =
  //   "https://images.unsplash.com/photo-1615840788094-a4df00dce64b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80";

  return (
    <section
      data-scroll-section
      id="about"
      className="relative mx-auto min-h-[105vh] max-w-[1920px] overflow-hidden bg-black px-[200px] font-syne font-bold sm:block sm:min-h-[75vh] lg:px-[50px]"
    >
      <h2 className="borderline relative mx-[auto] w-[100%] pt-24 pb-14 tracking-wide sm:mb-20 sm:pb-5 md:pt-10 md:text-xs">
        ABOUT
      </h2>
      <div className="w-[70%] lg:w-full">
        <div className="about-text items-between relative z-10 flex flex-col justify-center gap-10 sm:gap-0">
          <h3 className="sub-text mt-20 whitespace-nowrap text-left text-base text-ylw-100 sm:mt-0 sm:mb-0 sm:-translate-y-1/2 sm:text-left sm:text-xs ">
            {" "}
            <span className="uppercase text-sub"> Hey, I&apos;m</span> <br />
            <span className="font-sprat text-5xl  font-medium uppercase text-ylw-200 sm:text-2xl ">
              Joseph Dale Bañares
            </span>
          </h3>
          <p className="sub-text relative left-1 mb-20 whitespace-normal text-left font-syne text-lg font-semibold uppercase text-ylw-100 sm:mt-0 sm:mb-10 sm:text-left sm:text-xs md:mb-10">
            I&apos;m an eighteen year old front-end web developer based in
            Bacolod City, Philippines. I specialize in creative development and
            I love creating interactive websites. I mainly use react,
            tailwindcss, and gsap in my projects. I also have some experience
            with Three.js 3D Web Development. Outside of the virtual world, I
            enjoy running, swimming, and cycling.
          </p>
          <a
            data-scroll-to
            data-scroll
            data-scroll-delay={1}
            href="#contact"
            className="mx-auto mb-20 flex h-40 w-40 items-center justify-center rounded-[100%] border-[0.5px] border-white text-center text-xs uppercase tracking-widest text-white mix-blend-difference transition-all md:h-28 md:w-28 md:text-[0.6rem]"
          >
            contact
          </a>
          <div className="space h-80 bg-none lg:h-52"></div>
        </div>
      </div>
      {/* <img
        data-scroll
        data-scroll-speed={2}
        src={image}
        alt="image by Jocelyn Morales"
        className="absolute -bottom-36 right-0 z-[9] w-[38rem] rounded-tr-full rounded-tl-full sm:-bottom-24 sm:w-[20rem]"
      /> */}
      <div
        data-scroll
        data-scroll-speed={2}
        className="img-res absolute top-96 right-0 z-[9] rounded-tr-full rounded-tl-full sm:top-96"
      >
        <Image
          priority
          src={image}
          alt="Dale B."
          height={852}
          width={568}
          quality={90}
          className="rounded-tr-full rounded-tl-full"
        />
      </div>
      <div className="absolute bottom-0 -left-40">
        <Marquee />
      </div>
    </section>
  );
};
