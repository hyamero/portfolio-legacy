import React, { useEffect, useRef } from "react";
import { Navbar } from "./Navbar";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";

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
      <main
        ref={scrollRef}
        data-scroll-container
        className="max-w-[1920px] m-auto fixed left-0 right-0"
      >
        <Navbar />
        {children}
      </main>
    </>
  );
};
