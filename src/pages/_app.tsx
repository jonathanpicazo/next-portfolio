import React from "react";
import type { AppProps } from "next/app";
import { Layout } from "~/components";
import "../styles/globals.css";
import "dracula-ui/styles/dracula-ui.css";
import "easymde/dist/easymde.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
