import React from "react";

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
  return (
    <div
      id="home"
      data-scroll-section
      className="z-10 flex h-screen items-center justify-center bg-[#000405]"
    >
      <div className="relative m-auto">
        <span className="header-text text-clamp ">
          Blog
          <span className=" mt-5 inline-block rounded-full border-2 border-white py-2 px-5 pb-5 font-playfair text-5xl italic sm:text-3xl"></span>{" "}
        </span>
      </div>
    </div>
  );
};

export default Blog;
