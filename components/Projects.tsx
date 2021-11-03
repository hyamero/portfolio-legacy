import React from "react";
import filled from "../public/img/PROJECTSfilled.svg";
import test from "../public/img/daleb.jpg";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <section className="bg-transparent h-[200vh]">
      <img src={test.src} alt="Projects text" className="sticky" />
      <span>lol</span>
    </section>
  );
};
