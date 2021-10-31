import React from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="max-w-[1920px]">{children}</main>
    </div>
  );
};
