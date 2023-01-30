import React from "react";
import { Box, Button } from "dracula-ui";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
const styles = {
  wrapper:
    "flex justify-between items-center py-4 max-w-[300px] w-full mx-auto py-5",
  icon: "text-xl text-dracula-cyan ",
  copyright: "flex gap-x-2",
  social:
    "rounded-lg bg-dracula-darker-900 hover:opacity-75 p-3 flex items-center justify-center cursor-pointer",
};

const SocialList = () => {
  return (
    <>
      <section className="flex gap-x-4 mb-7 mt-4">
        <Link
          href="https://www.linkedin.com/in/jonathan-picazo/"
          target="_blank"
        >
          <motion.div
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{ duration: 0.2 }}
            className={styles.social}
          >
            <FaLinkedin className={`${styles.icon}`} />
          </motion.div>
        </Link>
        <Link href="https://github.com/jonathanpicazo" target="_blank">
          <motion.div
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{ duration: 0.2 }}
            className={styles.social}
          >
            <FaGithub className={`${styles.icon}`} />
          </motion.div>
        </Link>
      </section>
    </>
  );
};

export default SocialList;
