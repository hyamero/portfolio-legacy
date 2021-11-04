import React from "react";

interface ProjectsImgProps {}

export const ProjectsImg: React.FC<ProjectsImgProps> = ({}) => {
  return (
    <div className="h-screen">
      <div
        className="h-full w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
        }}
      ></div>
    </div>
  );
};
