import type { AppProps } from "next/app";

import "../styles/globals.css";
import { Navbar } from "@/components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Arnau Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/p.ico" />
      </Head>
      <Navbar />
      <div className="flex items-center justify-center">
        <Component {...pageProps} />
      </div>
    </>
  );
}
