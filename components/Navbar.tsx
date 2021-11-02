import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="fixed top-0 w-screen mt-12 max-w-[1920px] m-auto px-20 z-10">
      <div className="font-helvetica text-light flex justify-between">
        <h3>DALE B.</h3>
        <ul className="text-xs tracking-wider nav-btns">
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
        </ul>
      </div>
    </nav>
  );
};
