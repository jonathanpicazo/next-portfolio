import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/layout/footer";
import Nav from "../components/layout/nav-bar";
import "dracula-ui/styles/dracula-ui.css";

export default function App({ Component, pageProps }: AppProps) {
  const styles = {
    wrapper: "",
  };
  return (
    <>
      <div className="min-h-screen">
        <Nav />
        <div className="bg-dracula-dark mt-20">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
