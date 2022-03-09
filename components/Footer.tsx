import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const icons = [
    {
      link: "https://github.com/hyamero",
      component: <AiOutlineGithub />,
    },
    {
      link: "https://www.instagram.com/dale.hyamero/",
      component: <AiOutlineInstagram />,
    },
    {
      link: "https://www.linkedin.com/in/daleban/",
      component: <AiOutlineLinkedin />,
    },
  ];

  return (
    <footer
      data-scroll-section
      className="flex h-[110vh] max-w-[1920px] flex-col items-center justify-center bg-dark"
    >
      <div className="text-clamp borderline w-[80vw] max-w-[1440px] whitespace-nowrap border-t border-b py-8  text-center font-helvetica font-normal text-white">
        <div
          id="contact"
          data-scroll
          data-scroll-speed={2}
          className="hover-effect leading-none"
        >
          <a href="mailto:daleban.dev@gmail.com">GET IN TOUCH</a>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full flex-col items-center justify-between space-y-2 py-8 px-[90px] lg:px-[70px]">
        <p className="text-center font-playfair text-sm tracking-wider text-white sm:text-xs ">
          &copy; <span className="text-[1.1rem]">2022</span> DALE B. <br />
          <span className="italic">All Rights Reserved.</span>
        </p>
        <ul className="flex space-x-6 text-[1.4rem] text-white sm:text-[1.2rem]">
          {icons.map((icon) => (
            <li key={icon.link}>
              <a
                href={icon.link}
                className="transition-colors hover:text-gray-300"
              >
                {icon.component}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
