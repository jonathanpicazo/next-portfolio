import "../styles/globals.css";
import "dracula-ui/styles/dracula-ui.css";

import type { AppProps } from "next/app";
import { NavBar, Layout } from "~/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
