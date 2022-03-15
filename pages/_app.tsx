import "../styles/globals.css";
import "../styles/marquee.css";
import "../styles/text-hover.css";

import React from "react";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { DefaultSeo } from "next-seo";
import { GlobalContextProvider } from "../utilities/GlobalContext";

import SEO from "../next-seo-config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  );
}

export default MyApp;
