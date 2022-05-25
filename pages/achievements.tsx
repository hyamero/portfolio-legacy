import React from "react";

interface AchievementsProps {}

const Achievements: React.FC<AchievementsProps> = ({}) => {
  return (
    <div id="home" data-scroll-section className="z-10 h-[300vh] bg-[#000405]">
      <div className="relative m-auto">
        <span className="header-text text-clamp ">Achievements</span>
      </div>
    </div>
  );
};

export default Achievements;
