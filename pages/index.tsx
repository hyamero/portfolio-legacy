import type { NextPage } from "next";
import Head from "next/head";
import Heading from "../components/Heading";
import { About } from "../components/About";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dale Bañares</title>
        <meta name="description" content="Dale Bañares Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading />
        <About />
      </main>
    </div>
  );
};

export default Home;
