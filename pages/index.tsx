import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dale Bañares</title>
        <meta name="description" content="Dale Bañares Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-dark p-20 text-center">
        <h1 className="text-[3rem] text-ylw-100 font-Helvetica font">
          HELLO PORTFOLIO
        </h1>
        <h1 className="font-Sprat text-ylw-200 font-black text-9xl">DALE</h1>
      </main>
    </div>
  );
};

export default Home;
