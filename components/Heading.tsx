import React from "react";

interface HeadingProps {}

export const Heading: React.FC<HeadingProps> = ({}) => {
  return (
    <header className="container h-screen bg-dark flex flex-col justify-center items-center">
      <div className="relative">
        <p className="sub-text mr-auto absolute top-[-1rem] left-[3rem]">
          HI, I'M DALE BAÑARES
        </p>
        <div className="header-text text-[6rem] inline-block relative">
          &nbsp; I <span>DESIGN</span> AND
          <br /> DEVELOP <span>ELEGANT</span>
          <br />
          &nbsp; &nbsp; WEBSITES
        </div>
        <p className="text-sub whitespace-nowrap font-helvetica absolute bottom-0 right-[6rem]">
          FRONT-END DEVELOPER <br /> AND UI/UX DESIGNER, <br /> FULL-STACK
          CAPABLE
        </p>
      </div>
    </header>
  );
};
