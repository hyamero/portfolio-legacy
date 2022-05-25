import React from "react";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = ({}) => {
  return (
    <div id="home" data-scroll-section className="z-10 h-[300vh] bg-[#000405]">
      <div className="relative m-auto">
        <span className="header-text text-clamp ">Experience</span>
      </div>
    </div>
  );
};

export default Experience;
