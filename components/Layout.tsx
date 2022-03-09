import React, { useEffect, useRef } from "react";
import { Navbar } from "./Navbar";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import { useGlobal } from "../utilities/GlobalContext";
import { Loader } from "./Loader";

export const Layout: React.FC = ({ children }) => {
  const { loaderComplete } = useGlobal();
  const scrollRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
      });
    });
  }, []);

  return (
    <>
      {!loaderComplete && <Loader />}
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
