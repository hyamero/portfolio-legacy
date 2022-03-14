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
      className="relative flex h-[110vh] max-w-[1920px] flex-col items-center justify-center bg-dark px-[200px] lg:px-[50px]"
    >
      <div className="relative w-[80vw]  max-w-[1440px]  whitespace-nowrap py-8 text-center font-normal text-white">
        <h3 className="mx-[auto] pb-14 font-syne font-bold tracking-wider sm:pb-7 md:text-xs">
          GET IN TOUCH
        </h3>
        <div
          id="contact"
          className="hover-effect text-clamp borderline border-t py-8 font-playfair italic leading-none"
        >
          <a
            data-scroll
            data-scroll-speed={2}
            href="mailto:hyamero@daleban.tech"
          >
            hyamero@daleban.tech
          </a>
        </div>
      </div>
      <div className="relative top-[5vh] flex origin-bottom-left  flex-col items-center space-y-2 px-[90px] pb-8 lg:px-[70px]">
        <p className="text-center font-playfair text-sm tracking-wider text-white sm:text-xs ">
          &copy; <span className="text-[1.1rem] sm:text-xs">2022</span> DALE B.{" "}
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
