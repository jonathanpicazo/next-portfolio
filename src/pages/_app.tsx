import React from 'react';
import type { AppProps } from 'next/app';
import { Layout } from '~/components';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/globals.css';
import 'dracula-ui/styles/dracula-ui.css';
import 'easymde/dist/easymde.min.css';

export default function App({
  Component,
  pageProps: { ...pageProps },
  router,
}: AppProps) {
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo(0, 0)}
      initial={false}
    >
      <Layout>
        <motion.div
          className="text-dracula-light"
          key={router.route}
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          variants={{
            hidden: { opacity: 0, x: -20, y: 0 },
            enter: { opacity: 1, x: 0, y: 0 },
            exit: { opacity: 0, x: 0, y: -20 },
          }}
          transition={{ ease: 'easeOut', duration: 0.6 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </AnimatePresence>
  );
}
