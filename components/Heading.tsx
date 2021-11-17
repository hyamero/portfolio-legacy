import React from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

interface HeadingProps {}

const Heading: React.FC<HeadingProps> = ({}) => {
  return (
    <header className="container h-screen bg-dark flex flex-col justify-center items-center">
      <div className="relative">
        <p className="layer sub-text mr-auto absolute top-[-1rem] left-[3rem] overflow-hidden md:left-[2rem] md:top-[-0.6rem]">
          HI, I&apos;M DALE BAÑARES
        </p>
        <motion.div className="text-clamp header-text inline-block relative">
          &nbsp; I{" "}
          <motion.span initial={{ y: 100 }} animate={{ y: 0 }}>
            DESIGN
          </motion.span>{" "}
          AND
          <br /> DEVELOP <span>ELEGANT</span>
          <br />
          &nbsp; &nbsp; WEBSITES
        </motion.div>
        <p className="sub-text whitespace-nowrap font-helvetica absolute bottom-0 right-[6rem] sub-sentence md:right-[-1.5rem] md:-bottom-3">
          FRONT-END DEVELOPER <br /> AND UI/UX DESIGNER, <br /> FULL-STACK
          CAPABLE
        </p>
      </div>
    </header>
  );
};

// interface HeadingProps {}

// const Heading: React.FC<HeadingProps> = ({}) => {
//   return (
//     <motion.div className="container h-screen bg-dark flex flex-col justify-center items-center">
//       <div className="relative">
//         <p className="sub-text mr-auto absolute top-[-1rem] left-[3rem]">
//           HI, I'M DALE BAÑARES
//         </p>
//         <motion.div
//           variants={banner}
//           className="header-text text-[6rem] inline-block relative"
//         >
//           <BannerRowTop title={"I DESIGN AND"} />
//           <BannerRowCenter title={"DEVELOP ELEGANT"} />
//           <BannerRowBottom title={"WEBSITES"} />
//         </motion.div>
//         <p className="text-sub whitespace-nowrap font-helvetica absolute bottom-0 right-[6rem]">
//           FRONT-END DEVELOPER <br /> AND UI/UX DESIGNER, <br /> FULL-STACK
//           CAPABLE
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// interface AnimatedLettersProps {
//   title: string;
// }

// const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ title }) => {
//   return (
//     <motion.span>
//       {[...title].map((letter: string, i) => (
//         <motion.span
//           key={i}
//           variants={letterAni}
//           initial="initial"
//           animate="animate"
//         >
//           {letter}
//         </motion.span>
//       ))}
//     </motion.span>
//   );
// };

// interface BannerRowTop {
//   title: string;
// }

// const BannerRowTop: React.FC<BannerRowTop> = ({ title }) => {
//   return (
//     <div>
//       <AnimatedLetters title={title} />
//     </div>
//   );
// };

// interface BannerRowCenter {
//   title: string;
// }

// const BannerRowCenter: React.FC<BannerRowCenter> = ({ title }) => {
//   return (
//     <div>
//       <AnimatedLetters title={title} />
//     </div>
//   );
// };

// interface BannerRowBottom {
//   title: string;
// }

// const BannerRowBottom: React.FC<BannerRowBottom> = ({ title }) => {
//   return (
//     <div>
//       <AnimatedLetters title={title} />
//     </div>
//   );
// };

export default Heading;
