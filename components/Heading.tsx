import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import { gsap } from "gsap";

const headerTl = gsap.timeline();

interface HeadingProps {
  loaderComplete: boolean;
}

const Heading: React.FC<HeadingProps> = ({ loaderComplete }) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (loaderComplete) {
      console.log("loader compelte");
      headerTl
        .to(
          ".head-container",
          {
            css: { visibility: "visible" },
          },
          "-=1"
        )
        .from(".line-block span", {
          duration: 1.8,
          delay: -0.8,
          y: 150,
          ease: "power4.out",
          skewY: 7,
          stagger: {
            amount: 0.3,
          },
        });
    }
  }, [loaderComplete]);

  return (
    <header
      id="home"
      data-scroll-section
      className="h-screen bg-dark flex flex-col justify-center items-center z-10"
    >
      <div className="head-container relative invisible">
        <p
          data-scroll
          data-scroll-speed={1}
          className="layer sub-text mr-auto absolute top-[-1rem] left-[3rem] overflow-hidden md:left-[2rem] md:top-[-0.6rem]"
        >
          HI, I&apos;M DALE BAÑARES
        </p>
        <h1>
          <div className="line-block overflow-hidden relative h-[clamp(2rem,8vw,6rem)] w-screen text-center">
            <span className="header-text text-clamp absolute left-0 right-[180px]">
              &nbsp; I <span>DESIGN</span> AND
            </span>
          </div>
          <div className="line-block overflow-hidden relative h-[clamp(2rem,8vw,6rem)] w-screen text-center">
            <span className="header-text text-clamp absolute left-0 right-0">
              DEVELOP <span>ELEGANT</span>
            </span>
          </div>
          <div className="line-block overflow-hidden relative h-[clamp(2rem,8vw,6rem)] w-screen text-center">
            <span className="header-text text-clamp absolute left-0 right-[100px]">
              WEBSITES
            </span>
          </div>
        </h1>
        <p
          data-scroll
          data-scroll-speed={1}
          className="sub-text whitespace-nowrap font-helvetica absolute bottom-0 right-[6rem] sub-sentence md:right-0 md:-bottom-3 xs:-right-5"
        >
          FRONT-END DEVELOPER <br /> AND UI/UX DESIGNER, <br /> FULL-STACK
          CAPABLE
        </p>
      </div>
      <div data-scroll data-scroll-speed={-3} className="cursor-pointer">
        <a href="#about" data-scroll-to>
          <CgMouse className="text-white/75 text-2xl absolute bottom-[-9rem] left-[-1rem] md:text-base" />
        </a>
      </div>
    </header>
  );
};

export default Heading;
