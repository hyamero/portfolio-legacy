import type { NextPage } from "next";
import Head from "next/head";
import Heading from "../components/Heading";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dale Bañares</title>
        <meta name="description" content="Dale Bañares Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="z-30 relative">
        <Heading />
        <About />
        <Projects />
      </main>
    </div>
  );
};

export default Home;
