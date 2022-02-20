import React from "react";

interface HeadingProps {}

const Heading: React.FC<HeadingProps> = ({}) => {
  return (
    <header
      data-scroll-section
      className="container h-screen bg-dark flex flex-col justify-center items-center z-10"
    >
      <div className="relative">
        <p
          data-scroll
          data-scroll-speed={1}
          className="layer sub-text mr-auto absolute top-[-1rem] left-[3rem] overflow-hidden md:left-[2rem] md:top-[-0.6rem]"
        >
          HI, I&apos;M DALE BAÑARES
        </p>
        <div className="text-clamp header-text inline-block relative">
          &nbsp; I <span>DESIGN</span> AND
          <br /> DEVELOP <span>ELEGANT</span>
          <br />
          &nbsp; &nbsp; WEBSITES
        </div>
        <p
          data-scroll
          data-scroll-speed={1}
          className="sub-text whitespace-nowrap font-helvetica absolute bottom-0 right-[6rem] sub-sentence md:right-0 md:-bottom-3 xs:-right-5"
        >
          FRONT-END DEVELOPER <br /> AND UI/UX DESIGNER, <br /> FULL-STACK
          CAPABLE
        </p>
      </div>
    </header>
  );
};

export default Heading;
