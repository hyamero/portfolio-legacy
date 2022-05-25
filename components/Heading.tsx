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
      headerTl
        .to(
          ".hidden-item",
          {
            css: { visibility: "visible", overflow: "visible" },
          },
          "-=1"
        )
        .from(".line-block span", {
          duration: 1.8,
          delay: -1.4,
          y: 150,
          ease: "power4.out",
          skewY: 7,
          stagger: {
            amount: 0.3,
          },
        })
        .to(".show-anim", {
          duration: 0.7,
          delay: -0.8,
          opacity: 1,
        });
    }
  }, [loaderComplete]);

  return (
    <header
      id="home"
      data-scroll-section
      className="z-10 flex h-screen flex-col items-center justify-center bg-[#000405]"
    >
      <div className="hidden-item invisible  relative m-auto w-[1000px] lg:w-full">
        <p className="show-anim layer sub-text absolute -top-4 left-[8rem] mr-auto overflow-hidden opacity-0">
          HI, I&apos;M DALE BAÑARES
        </p>
        <h1>
          <div className="line-block relative h-[clamp(2rem,8vw,6rem)] overflow-hidden ">
            <span className="header-text text-clamp absolute left-10 pl-10  sm:left-0">
              &nbsp; I <span>DESIGN</span> AND
            </span>
          </div>
          <div className="line-block relative h-[clamp(2rem,8vw,6rem)] overflow-hidden">
            <span className="header-text text-clamp absolute left-0 right-0 text-center">
              DEVELOP <span>ELEGANT</span>
            </span>
          </div>
          <div className="line-block relative h-[clamp(2rem,8vw,6rem)] overflow-hidden">
            <span className="header-text text-clamp absolute left-24 sm:left-14">
              &nbsp; WEBSITES
            </span>
          </div>
        </h1>
        <p className="show-anim sub-text sub-sentence absolute bottom-[1rem] right-16 whitespace-nowrap opacity-0">
          FRONT-END DEVELOPER <br /> AND UI/UX DESIGNER, <br /> FULL-STACK
          CAPABLE
        </p>
        <a
          href="#about"
          data-scroll-to
          data-scroll
          data-scroll-speed={-2}
          className="show-anim absolute left-1/2 -bottom-52 opacity-0 sm:-bottom-20"
        >
          <CgMouse className="relative -left-4 select-none text-2xl text-white/75 md:text-base" />
        </a>
      </div>
    </header>
  );
};

export default Heading;
