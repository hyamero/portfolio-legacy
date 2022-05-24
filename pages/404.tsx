import Link from "next/link";
import React from "react";

const Error404: React.FC = ({}) => {
  return (
    <div
      id="home"
      data-scroll-section
      className="z-10 flex h-screen items-center justify-center bg-[#000405]"
    >
      <div className="relative m-auto">
        <span className="header-text text-clamp ">
          ERROR <span className="text-9xl sm:text-7xl">404</span> <br /> PAGE
          NOT FOUND <br />
          <span className=" mt-5 inline-block rounded-full border-2 border-white py-2 px-5 pb-5 font-playfair text-5xl italic sm:text-3xl">
            <Link href="/">return</Link>
          </span>{" "}
        </span>
      </div>
    </div>
  );
};

export default Error404;
