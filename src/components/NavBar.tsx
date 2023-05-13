import React, { useState } from "react";
import Image from "next/image";
import { Layout } from "./Layout";
import { navLinks } from "~/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { formatPathName } from "~/utils";
import { RouterType } from "~/types";
import { useRouter } from "next/router";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export const NavBar = () => {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <nav className="bg-dracula-darker-900 border-gray-200">
        <Layout>
          <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-2">
            <div>
              <SocialIcons />
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded="false"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            {/* Desktop */}
            <div className="hidden md:block">
              <ul className="flex text-base rounded-lg flex-row space-x-8 mt-0">
                {navLinks.map((name, index) => (
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
            {/* Mobile */}
            {showMobileMenu ? (
              <div className="w-full block md:hidden">
                <ul className="flex flex-col p-4 mt-4 rounded-lg bg-dracula-dark text-base">
                  {navLinks.map((name, index) => (
                    <li
                      className="py-2 pl-3 pr-4"
                      key={`mobile-nav-${name}-${index}`}
                    >
                      <Link
                        className="capitalize block"
                        href={formatPathName(name)}
                        onClick={() => setShowMobileMenu(false)}
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
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </Layout>
      </nav>
    </>
  );
};

const SocialIcons = () => {
  const styles = {
    wrapper:
      "flex justify-between items-center py-4 max-w-[300px] w-full mx-auto py-5",
    icon: "text-xl text-dracula-cyan",
    social:
      "rounded-lg bg-dracula-darker-900 hover:opacity-75 p-3 flex items-center justify-center cursor-pointer",
  };
  return (
    <div className="flex items-center gap-x-4">
      <Link href="https://www.linkedin.com/in/jonathan-picazo/" target="_blank">
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
  );
};
