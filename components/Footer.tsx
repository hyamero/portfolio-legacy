import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div
      data-scroll-section
      className="h-screen bg-dark flex flex-col justify-center items-center max-w-[1920px]"
    >
      <div className="font-helvetica font-normal text-center text-white text-clamp whitespace-nowrap borderline py-8  border-t border-b`">
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={1}
        >
          GET I<span className="font-sprat">N</span> TOUCH
        </div>
      </div>
      <p className="font-helvetica text-2xl text-white mt-5">
        daleban.dev@gmail.com{" "}
      </p>
      <p className="font-sans text-lg text-white">New 3D Portfolio WIP 👀</p>
      <footer className="absolute bottom-0 w-full p-8">
        <p className="text-center text-white text-sm tracking-wider">
          &copy;2022 | DALE BAN.
        </p>
      </footer>
    </div>
  );
};

// Some Inspirations from theshift.tokyo
