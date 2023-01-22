import React from "react";
import { Box, Button } from "dracula-ui";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
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
      <section className="flex gap-x-4 mb-6 mt-2">
        <div>
          <div className={styles.social}>
            <Link
              href="https://www.linkedin.com/in/jonathan-picazo/"
              target="_blank"
            >
              <FaLinkedin className={`${styles.icon}`} />
            </Link>
          </div>
        </div>
        <div className={styles.social}>
          <Link href="https://github.com/jonathanpicazo" target="_blank">
            <FaGithub className={`${styles.icon}`} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default SocialList;
