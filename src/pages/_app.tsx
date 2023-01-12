import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/layout/footer";
import Nav from "../components/layout/nav-bar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const styles = {
    wrapper: "",
  };
  return (
    <>
      <div>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
