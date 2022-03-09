import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGlobal } from "../utilities/GlobalContext";

const tl = gsap.timeline();
const welcomeScreen = gsap.timeline({
  paused: true,
});

export const Loader: React.FC = ({}) => {
  const { setLoaderComplete } = useGlobal();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    tl.to(".bracket", {
      duration: 0.3,
      scale: 1,
      margin: 0,
    });
    tl.from("#loader", {
      duration: 0.2,
      scale: 0,
    });

    // welcome screen
    welcomeScreen.to(".loading-section", {
      y: -10,
      opacity: 0,
    });
    welcomeScreen.to(".loading-screen", {
      duration: 0.8,
      y: -2000,
      ease: "Power4.out",
    });
    welcomeScreen.to(
      ".after-block",
      {
        duration: 0.8,
        y: -2000,
        ease: "Power4.out",
        onComplete: handleLoaderComplete,
      },
      "-=0.4"
    );

    loader();
  }, []);

  function loader() {
    id = setInterval(frame, 20);
  }
  function frame() {
    if (i >= 100) {
      clearInterval(id);
      welcomeScreen.play();
    } else {
      i++;
      setTime(i);
    }
  }

  // initializing loader
  const [time, setTime] = useState<number>(0);

  let id: any,
    i = 0;

  const handleLoaderComplete = () => {
    setLoaderComplete(true);
  };

  return (
    <>
      <div className="loading-screen absolute z-[13] h-screen w-full overflow-hidden bg-black text-white">
        <div className="loading-section absolute flex h-screen w-full items-center justify-center">
          <div className="title mx-5 font-playfair text-3xl font-medium italic tracking-wider">
            Dale
          </div>
          <div className="bracket bracket1 scale-50 font-playfair text-2xl">
            (&nbsp;
          </div>
          <div id="loader" className="font-sprat text-2xl font-medium">
            {time}%
          </div>
          <div className="bracket bracket2 scale-50 font-playfair text-2xl">
            &nbsp;)
          </div>
          <div className="title mx-5 font-playfair text-3xl font-medium italic tracking-wider">
            Bañares
          </div>
        </div>
      </div>
      <div className="after-block absolute z-10 h-screen w-full bg-ylw-200"></div>
    </>
  );
};
