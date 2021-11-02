import React from "react";

interface EmptyProps {}

export const Empty: React.FC<EmptyProps> = ({}) => {
  return (
    <div className="h-screen bg-dark">
      <span></span>
    </div>
  );
};
