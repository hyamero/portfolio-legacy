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
        })
        .to(".show-anim", {
          duration: 1,
          delay: -0.8,
          opacity: 1,
        });
    }
  }, [loaderComplete]);

  return (
    <header
      id="home"
      data-scroll-section
      className="h-screen bg-dark flex flex-col justify-center items-center z-10"
    >
      <div className="hidden-item relative invisible w-[1000px] lg:w-full m-auto">
        <p
          data-scroll
          data-scroll-speed={1}
          className="show-anim layer sub-text mr-auto absolute top-0 left-[6rem] overflow-hidden opacity-0"
        >
          HI, I&apos;M DALE BAÑARES
        </p>
        <h1>
          <div className="line-block overflow-hidden relative h-[clamp(2rem,8vw,6rem)]">
            <span className="header-text text-clamp absolute left-10 md:left-10">
              &nbsp; I <span>DESIGN</span> AND
            </span>
          </div>
          <div className="line-block overflow-hidden relative h-[clamp(2rem,8vw,6rem)]">
            <span className="header-text text-clamp absolute left-0 right-0 text-center">
              DEVELOP <span>ELEGANT</span>
            </span>
          </div>
          <div className="line-block overflow-hidden relative h-[clamp(2rem,8vw,6rem)]">
            <span className="header-text text-clamp absolute left-24">
              &nbsp; WEBSITES
            </span>
          </div>
        </h1>
        <p
          data-scroll
          data-scroll-speed={1}
          className="show-anim sub-text whitespace-nowrap font-helvetica absolute bottom-[1rem] right-16 sub-sentence opacity-0"
        >
          FRONT-END DEVELOPER <br /> AND UI/UX DESIGNER, <br /> FULL-STACK
          CAPABLE
        </p>
      </div>
      <div
        data-scroll
        data-scroll-speed={-3}
        className="hidden-item cursor-pointer show-anim opacity-0"
      >
        <a href="#about" data-scroll-to>
          <CgMouse className="text-white/75 text-2xl absolute bottom-[5rem] left-[-1rem] md:text-base" />
        </a>
      </div>
    </header>
  );
};

export default Heading;
