import React from "react";
import { Box, Button } from "dracula-ui";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const styles = {
  wrapper:
    "flex justify-between items-center py-4 max-w-[300px] w-full mx-auto py-5",
  icon: "text-xl",
  copyright: "flex gap-x-2",
  social:
    "rounded-lg bg-dracula-darker-900 p-3 flex items-center justify-center",
};

const SocialList = () => {
  return (
    <>
      <section className="flex gap-x-4 mb-6 mt-2">
        <div>
          <div className={styles.social}>
            <Link
              href="https://www.linkedin.com/in/jonathan-picazo/"
              target="_blank"
            >
              <FaLinkedin className={`${styles.icon} text-dracula-cyan`} />
            </Link>
          </div>
        </div>
        <div className={styles.social}>
          <Link href="https://github.com/jonathanpicazo" target="_blank">
            <FaGithub className={`${styles.icon} text-dracula-light`} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default SocialList;
