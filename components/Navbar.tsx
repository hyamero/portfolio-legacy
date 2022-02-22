import React from "react";

const slideDown = {
  hidden: {},
};

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="container max-w-[1920px] fixed top-0 center mt-12 mx-auto px-20 z-10 lg:px-10 mix-blend-exclusion">
      <div className="font-helvetica text-white flex justify-between">
        <h3 className="md:text-xs tracking-widest">DALE B.</h3>
        <ul className="text-xs tracking-wider md:text-[0.6rem] space-y-[0.15rem]">
          <NavBtns />
        </ul>
      </div>
    </nav>
  );
};

const navText = ["home", "about", "projects", "contact"];

const NavBtns: React.FC = ({}) => {
  return (
    <>
      {navText.map((text, i) => (
        <li key={i} className="hover-effect">
          <a
            href={`#${text}`}
            data-scroll-to
            className="uppercase cursor-pointer tracking-widest"
          >
            {text}
          </a>
        </li>
      ))}
    </>
  );
};
