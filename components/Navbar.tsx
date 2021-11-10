import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll detection
  const [scrollDown, setScrollDown] = useState<boolean>(false);
  const [scrollUp, setScrollUp] = useState<boolean>(false);

  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
      setIsOpen(window.scrollY < 300);
    });
  }, []);

  //Scroll Down
  const endRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollDown || !scrollDown) scrollToBottom();
  }, [scrollDown]);

  //Scroll Up
  const startRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    startRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollUp || !scrollUp) scrollToTop();
  }, [scrollUp]);

  return (
    <AnimatePresence initial={false}>
      <nav className="container fixed top-0 center w-screen mt-12 mx-auto px-20 z-10">
        <div className="font-helvetica text-light flex justify-between">
          <h3 className="text-outline">DALE B.</h3>
          {!scroll && (
            <motion.ul
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-xs tracking-wider nav-btns"
            >
              <NavBtns />
            </motion.ul>
          )}
          {scroll && (
            <>
              {!isOpen && (
                <motion.button
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                  onMouseEnter={() => setIsOpen(true)}
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-dark rounded-3xl text-sm px-2 border border-light"
                >
                  MENU
                </motion.button>
              )}
              {isOpen && (
                <ul
                  onMouseLeave={() => setIsOpen(false)}
                  className="text-xs tracking-wider nav-btns bg-dark px-10 py-10 rounded-3xl text-left"
                >
                  <button
                    onMouseEnter={() => setIsOpen(true)}
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-dark rounded-3xl text-sm mb-5 text-center"
                  >
                    MENU
                  </button>
                  <NavBtns />
                </ul>
              )}
            </>
          )}{" "}
        </div>
      </nav>
    </AnimatePresence>
  );
};

const NavBtns: React.FC = ({}) => {
  return (
    <>
      <li>
        <a href="">HOME</a>
      </li>
      <li>
        <a href="">ABOUT</a>
      </li>
      <li>
        <a href="">PROJECTS</a>
      </li>
      <li>
        <a href="">CONTACT</a>
      </li>
    </>
  );
};
