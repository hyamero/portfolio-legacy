import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="fixed top-0 w-screen mt-10">
      <div className="container font-Helvetica text-light flex justify-between">
        <h3>DALE B.</h3>
        <ul className="text-xs tracking-wider">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
};
