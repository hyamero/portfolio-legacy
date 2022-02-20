import React from "react";

const slideDown = {
  hidden: {},
};

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="container max-w-[1920px] fixed top-0 center mt-12 mx-auto px-20 z-10 sm:px-10 ">
      <div className="font-helvetica text-white flex justify-between">
        <h3 className="mix-blend-exclusion sm:text-sm">DALE B.</h3>
        <ul className="text-xs tracking-wider nav-btns sm:text-[0.6rem]">
          <NavBtns />
        </ul>
      </div>
    </nav>
  );
};

const navText = ["home", "about", "projects", "contact"];

const NavBtns: React.FC = ({}) => {
  return (
    <div className="text-left">
      {navText.map((text, i) => (
        <li key={i}>
          <a
            href={`#${text}`}
            data-scroll-to
            className="uppercase cursor-pointer"
          >
            {text}
          </a>
        </li>
      ))}
    </div>
  );
};
