import React from "react";
import { codeTechs, designTechs } from "../utilities/techs";

interface MarqueeProps {}

export const Marquee: React.FC<MarqueeProps> = ({}) => {
  return (
    <div className="relative z-[11] mt-20 max-w-[1920px]">
      <div className="mb-20 sm:mb-10">
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={2}
          className="flex space-x-20 md:space-x-10"
        >
          {codeTechs.map((tech: any, i: number) => (
            <div key={i} className="tech-text font-druk">
              {tech}
            </div>
          ))}
        </div>

        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={-2}
          className="flex space-x-20 md:space-x-10"
        >
          {designTechs.map((tech: any, i: number) => (
            <div key={i} className="tech-text font-druk text-ylw-100">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
