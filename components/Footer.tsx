import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="h-screen bg-dark">
      <div className="text-9xl font-sprat font-black text-center text-ylw-200">
        FOOTER
      </div>
    </footer>
  );
};
