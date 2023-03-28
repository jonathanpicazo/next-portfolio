import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Nav, Footer } from "~/components";
import "dracula-ui/styles/dracula-ui.css";

export default function App({ Component, pageProps }: AppProps) {
  const styles = {
    wrapper: "",
  };
  return (
    <>
      <div>
        <Nav />
        <div className="bg-dracula-dark mt-20">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
