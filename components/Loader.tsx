import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const tl = gsap.timeline();
const welcomeScreen = gsap.timeline({
  paused: true,
});

interface LoaderProps {
  setLoaderComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Loader: React.FC<LoaderProps> = ({ setLoaderComplete }) => {
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
      <div className="loading-screen absolute z-[11] w-full h-screen bg-black text-white overflow-hidden">
        <div className="loading-section absolute flex w-full h-screen items-center justify-center">
          <div className="title mx-5 text-3xl font-playfair italic font-medium tracking-wider">
            Dale
          </div>
          <div className="bracket bracket1 text-2xl font-playfair scale-50">
            (&nbsp;
          </div>
          <div id="loader" className="text-2xl font-sprat font-medium">
            {time}%
          </div>
          <div className="bracket bracket2 text-2xl font-playfair scale-50">
            &nbsp;)
          </div>
          <div className="title mx-5 text-3xl font-playfair italic font-medium tracking-wider">
            Bañares
          </div>
        </div>
        {/* <div className="bottom-section w-screen text-xs text-center absolute bottom-0 left-0 font-helvetica uppercase tracking">
          <div className="bottom-line">Dale B. Portfolio 2022&#169;.</div>
          <div className="bottom-line">All Rights Reserved</div>
        </div> */}
      </div>
      <div className="after-block absolute z-10 w-full h-screen bg-ylw-200"></div>
    </>
  );
};
