import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slideDown = {
  hidden: {},
};

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
          <h3>DALE B.</h3>
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
                <motion.ul
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                  onMouseLeave={() => setIsOpen(false)}
                  className="text-xs tracking-wider nav-btns bg-dark px-10 py-10 rounded-3xl text-center fixed right-[2.5rem] top-0"
                >
                  <motion.button
                    onMouseEnter={() => setIsOpen(true)}
                    onClick={() => setIsOpen(!isOpen)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-dark rounded-3xl text-sm mb-5 text-center mx-auto"
                  >
                    MENU
                  </motion.button>
                  <NavBtns />
                </motion.ul>
              )}
            </>
          )}{" "}
        </div>
      </nav>
    </AnimatePresence>
  );
};

const navChildren = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const navText = ["home", "about", "projects", "contact"];

const NavBtns: React.FC = ({}) => {
  return (
    <div className="text-left">
      {navText.map((text, i) => (
        <motion.li
          variants={navChildren}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeOut", duration: 0.3, delay: i * 0.1 }}
        >
          <a href={`#${text}`} className="uppercase">
            {text}
          </a>
        </motion.li>
      ))}
    </div>
  );
};
