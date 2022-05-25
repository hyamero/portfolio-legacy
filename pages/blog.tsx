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
        <span className="header-text text-clamp ">Blog</span>
      </div>
    </div>
  );
};

export default Blog;
