import React, { useEffect, useRef } from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const scrollRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: false,
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <main ref={scrollRef} data-scroll-container className="max-w-[1920px]">
        {children}
      </main>
    </>
  );
};
