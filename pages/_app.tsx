import React from "react";
import Head from "next/head";
import Nprogress from "nprogress";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
