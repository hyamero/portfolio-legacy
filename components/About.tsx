import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { codeTechs, designTechs } from "../utilities/techs";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    opacity: 1,
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const marqueeVariantsSlow = {
  animate: {
    x: [0, -900],
    opacity: 1,
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <section className="container min-h-[130vh] bg-dark font-helvetica relative overflow-hidden">
      <div className="container">
        <h4 className="borderline w-[80%] mx-[auto] pt-20 pb-14 tracking-wider">
          ABOUT
        </h4>
        <p className="text-ylw-100 text-md text-center w-[100%] mx-auto mt-14 mb-40">
          MY NAME IS{" "}
          <span className="font-druk tracking-widest">JOSEPH DALE BAÑARES</span>{" "}
          AND I’M A WEB DEVELOPER BASED IN THE PHILIPPINES. I AM A UI/UX
          DESIGNER AND A FULL STACK WEB DEVELOPER. I AM A REACT.JS ENTHUSIAST
          AND I LIKE TO CREATE ELEGANT, RESPONSIVE WEBSITES.{" "}
        </p>
      </div>
      <div className="borderline py-14 my-20 border-t-[1px]">
        TECHNOLOGIES I USE
      </div>

      <div className="tech-text font-druk">
        {codeTechs.map((tech: any) => (
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            className="text-light"
          >
            {tech}
          </motion.div>
        ))}
      </div>

      <div className="tech-text font-druk mb-30">
        {designTechs.map((tech: any) => (
          <motion.div
            variants={marqueeVariantsSlow}
            animate="animate"
            className="text-light"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
