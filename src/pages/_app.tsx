import React from "react";
import type { AppProps } from "next/app";
import { Layout } from "~/components";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import "dracula-ui/styles/dracula-ui.css";
import "easymde/dist/easymde.min.css";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Layout>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </>
  );
}
