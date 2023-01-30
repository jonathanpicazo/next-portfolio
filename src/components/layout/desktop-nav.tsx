import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "data/variables";
import { formatPathName } from "utils/functions/format-path-name";
import { RouterType } from "types";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const styles = {
  wrapper:
    "flex justify-between items-center py-4 max-w-[300px] w-full mx-auto py-5",
  icon: "text-xl text-dracula-cyan",
  social:
    "rounded-lg bg-dracula-darker-900 hover:opacity-75 p-3 flex items-center justify-center cursor-pointer",
};
const DesktopNav = ({ router }: { router: RouterType }) => {
  return (
    <>
      <nav className="bg-dracula-darker-900 border-gray-200 px-2 sm:px-4 py-2.5 rounded mb-6">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center gap-x-4">
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
          </div>

          <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {navLinks &&
              navLinks.map((name: string, index: number) => (
                <li key={`desktop-nav-${name}-${index}`}>
                  <Link
                    href={formatPathName(name)}
                    className="capitalize block py-2 pl-3 pr-4"
                  >
                    <motion.div
                      whileHover={{ scale: [null, 1.1, 1.0] }}
                      transition={{ duration: 0.2 }}
                    >
                      <span
                        className={`hover:opacity-75 ${
                          router.pathname === formatPathName(name)
                            ? "text-dracula-cyan border-b border-dracula-cyan"
                            : "text-dracula-light"
                        }`}
                      >
                        {name}
                      </span>
                    </motion.div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default DesktopNav;
