import React, { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";

import Head from "next/head";

import Heading from "../components/Heading";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";

const Home: NextPage = () => {
  const [loaderComplete, setLoaderComplete] = useState<boolean>(false);

  return (
    <div className="h-[100%] w-[100%]">
      <Head>
        <title>Dale Bañares</title>
        <meta name="description" content="Dale Bañares Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!loaderComplete && <Loader setLoaderComplete={setLoaderComplete} />}
        <Heading loaderComplete={loaderComplete} />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
