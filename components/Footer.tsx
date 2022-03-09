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
      className="h-[110vh] bg-dark flex flex-col justify-center items-center max-w-[1920px]"
    >
      <div className="font-helvetica font-normal text-center text-white text-clamp whitespace-nowrap borderline py-8  border-t border-b w-[80vw] max-w-[1440px]">
        <div
          id="contact"
          data-scroll
          data-scroll-speed={2}
          className="hover-effect leading-none"
        >
          <a href="mailto:daleban.dev@gmail.com">GET IN TOUCH</a>
        </div>
      </div>
      <div className="absolute bottom-0 w-full py-8 px-[90px] lg:px-[70px] flex justify-between items-center flex-col space-y-2">
        <p className="text-center text-white text-sm tracking-wider font-playfair sm:text-xs ">
          &copy; <span className="text-[1.1rem]">2022</span> DALE B. <br />
          <span className="italic">All Rights Reserved.</span>
        </p>
        <ul className="text-white flex space-x-6 text-[1.4rem] sm:text-[1.2rem]">
          {icons.map((icon) => (
            <li key={icon.link}>
              <a
                href={icon.link}
                className="hover:text-gray-300 transition-colors"
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
