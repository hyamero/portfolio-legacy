import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div
      id="contact"
      data-scroll-section
      className="h-screen bg-dark flex flex-col justify-center items-center max-w-[1920px] sm:h-[70vh]"
    >
      <div className="font-helvetica font-normal text-center text-white text-clamp whitespace-nowrap borderline py-8  border-t border-b w-[80vw] max-w-[1440px]">
        <div
          data-scroll
          data-scroll-speed={2}
          className="hover-effect leading-none"
        >
          <a href="mailto:daleban.alt@gmail.com">GET IN TOUCH</a>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full py-8 px-[90px] flex justify-between items-center sm:flex-col sm:space-y-2">
        <p className="text-center text-white text-sm tracking-wider font-helvetica sm:text-xs">
          &copy;2022 | DALE BAN.
        </p>
        <ul className="text-white flex space-x-6 text-[1.4rem]">
          <li>
            <a
              href="https://github.com/hyamero"
              className="hover:text-gray-300 transition-colors"
            >
              <AiOutlineGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dale.hyamero/"
              className="hover:text-gray-300 transition-colors"
            >
              <AiOutlineInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/daleban/"
              className="hover:text-gray-300 transition-colors"
            >
              <AiOutlineLinkedin />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
