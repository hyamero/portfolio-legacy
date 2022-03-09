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
    <>
      <header
        id="home"
        data-scroll-section
        className="h-screen bg-[#000405] flex flex-col justify-center items-center z-10"
      >
        <div className="noise" />
        <div className="hidden-item invisible  relative w-[1000px] lg:w-full m-auto">
          <p className="show-anim layer sub-text mr-auto  absolute -top-4 left-[8rem] overflow-hidden opacity-0">
            HI, I&apos;M DALE BAÑARES
          </p>
          <h1>
            <div className="line-block overflow-hidden relative h-[clamp(2rem,8vw,6rem)] ">
              <span className="header-text text-clamp absolute left-10 sm:left-0  pl-10">
                &nbsp; I <span>DESIGN</span> AND
              </span>
            </div>
            <div className="line-block overflow-hidden relative h-[clamp(2rem,8vw,6rem)]">
              <span className="header-text text-clamp absolute left-0 right-0 text-center">
                DEVELOP <span>ELEGANT</span>
              </span>
            </div>
            <div className="line-block overflow-hidden relative h-[clamp(2rem,8vw,6rem)]">
              <span className="header-text text-clamp absolute left-24 sm:left-14">
                &nbsp; WEBSITES
              </span>
            </div>
          </h1>
          <p className="show-anim sub-text whitespace-nowrap font-helvetica absolute bottom-[1rem] right-16 sub-sentence opacity-0">
            FRONT-END DEVELOPER <br /> AND UI/UX DESIGNER, <br /> FULL-STACK
            CAPABLE
          </p>
          <div
            data-scroll
            data-scroll-speed={-2}
            className="cursor-pointer show-anim opacity-0 absolute left-1/2 -bottom-52 sm:-bottom-20"
          >
            <a href="#about" data-scroll-to>
              <CgMouse className="text-white/75 text-2xl relative -left-4 md:text-base" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Heading;
