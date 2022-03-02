import "../styles/globals.css";
import "../styles/text-hover.css";
// import "../styles/marquee.css";

import React from "react";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { GlobalContextProvider } from "../utilities/GlobalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  );
}

export default MyApp;
