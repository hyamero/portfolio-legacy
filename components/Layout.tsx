import React from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <div className="filled-text z-[-3]"></div>
      <div className="stroke-text z-[-1]"></div>
      <main className="max-w-[1920px]">{children}</main>
    </div>
  );
};
