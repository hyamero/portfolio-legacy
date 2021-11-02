import { useState, useEffect } from "react";

export default function useWindowSize() {
  if (typeof window !== "undefined") {
    function getSize() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }
}
