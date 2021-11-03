import React, { useRef, useEffect } from "react";
import { Navbar } from "./Navbar";

import useWindowSize from "../hooks/useWindowSize";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const size = useWindowSize();

  const layout = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current?.getBoundingClientRect().height
    }px`;
  }, [size?.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    //variables
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size!.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    scrollContainer.current!.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div
      ref={layout}
      className="fixed top-0 left-0 h-[100%] w-[100%] overflow-hidden"
    >
      <Navbar />
      <div className="filled-text z-[-1]"></div>
      <div className="stroke-text z-[1]"></div>
      <main
        ref={scrollContainer}
        className="pointer-events-none max-w-[1920px]"
      >
        {children}
      </main>
    </div>
  );
};
