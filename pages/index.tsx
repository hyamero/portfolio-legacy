import type { NextPage } from "next";
import Head from "next/head";
import Heading from "../components/Heading";
import { Empty } from "../components/Empty";

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
        <Empty />
      </main>
    </div>
  );
};

export default Home;
