import React from "react";
import type { NextPage } from "next";

import Heading from "../components/Heading";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import { useGlobal } from "../utilities/GlobalContext";

const Home: NextPage = () => {
  const { loaderComplete } = useGlobal();

  return (
    <div className="h-full w-full">
      <main>
        <Heading loaderComplete={loaderComplete} />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
