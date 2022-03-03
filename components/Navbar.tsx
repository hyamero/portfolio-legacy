import React, { useEffect } from "react";

const slideDown = {
  hidden: {},
};

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
    <nav className="container max-w-[1920px] fixed top-0 center mt-12 mx-auto px-20 lg:px-10 z-10 mix-blend-difference">
      <div className="font-helvetica text-white flex justify-between">
        <a
          data-scroll-to
          className="md:text-xs tracking-widest cursor-pointer font-sprat italic font-normal"
          href="#home"
          style={{ transitionDelay: "0.01s" }}
        >
          DALE B.
        </a>
        <div className=" menu flex flex-col justify-center items-left text-sm tracking-wider sm:text-[0.6rem] sm:leading-3  space-y-[0.15rem] text-left">
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
