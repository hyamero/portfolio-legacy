import React, { useEffect } from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  useEffect(() => {
    const menuItems = [...document.querySelectorAll(".menu-item")];
    menuItems.forEach((item: any) => {
      let word = item.children[0].children[0].innerText.split("");
      item.children[0].innerHTML = "";
      word.forEach((letter: string, idx: number) => {
        item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
      });

      let cloneDiv = item.children[0].cloneNode(true);
      cloneDiv.style.position = "absolute";
      cloneDiv.style.left = "0";
      cloneDiv.style.top = "0";
      item.appendChild(cloneDiv);
    });
  }, []);

  return (
    <nav className="center container fixed top-0 z-10 mx-auto mt-12 max-w-[1920px] px-20 mix-blend-difference lg:px-10">
      <div className="flex justify-between text-white">
        <a
          data-scroll-to
          className="h-[1rem] cursor-pointer font-playfair font-normal italic tracking-widest md:text-xs"
          href="#home"
        >
          DALE B.
        </a>
        <div className=" menu items-left flex flex-col justify-center space-y-[0.15rem] text-left text-sm tracking-wider  sm:text-[0.6rem] sm:leading-3">
          <NavBtns />
        </div>
      </div>
    </nav>
  );
};

const navText = ["home", "about", "projects", "contact"];

const NavBtns: React.FC = ({}) => {
  return (
    <>
      {navText.map((text, i) => (
        <a data-scroll-to key={i} href={`#${text}`} className="menu-item">
          <div>
            <span className="menu-item-text font-sprat font-normal uppercase tracking-wider">
              {text}
            </span>
          </div>
        </a>
      ))}
    </>
  );
};
