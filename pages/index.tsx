import React, { useEffect, useRef } from "react";
import type { NextPage } from "next";

import Head from "next/head";

import Heading from "../components/Heading";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="h-[100%] w-[100%]">
      <Head>
        <title>Dale Bañares</title>
        <meta name="description" content="Dale Bañares Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
