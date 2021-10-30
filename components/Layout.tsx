import React from "react";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <main className="max-w-[1920px]">{children}</main>
    </div>
  );
};
