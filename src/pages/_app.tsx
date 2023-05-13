import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Nav, Footer, NavBar } from "~/components";
import "dracula-ui/styles/dracula-ui.css";

export default function App({ Component, pageProps }: AppProps) {
  const styles = {
    wrapper: "",
  };
  return (
    <>
      <NavBar />
      <div className="bg-dracula-dark mt-20">
        <Component {...pageProps} />
      </div>
    </>
  );
}
