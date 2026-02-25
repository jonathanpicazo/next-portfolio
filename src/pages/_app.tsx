import React from 'react';
import type { AppProps } from 'next/app';
import { Layout } from '~/components';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

export default function App({
  Component,
  pageProps: { ...pageProps },
  router,
}: AppProps) {
  return (
    <Layout>
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <motion.div
          className="text-dracula-light"
          key={router.route}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={{
            hidden: { opacity: 0, x: -20, y: 0 },
            enter: { opacity: 1, x: 0, y: 0 },
            exit: { opacity: 0, x: 0, y: -20 },
          }}
          transition={{ ease: 'easeOut', duration: 0.25 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
