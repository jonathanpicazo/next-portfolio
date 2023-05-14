import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GoRepo } from "react-icons/go";
import { useClickAway } from "react-use";

import { Layout } from "~/components";
import { navLinks } from "~/data";
import { formatPathName } from "~/utils";

export const NavBar = () => {
  const { pathname } = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileNavRef = useRef(null);
  useClickAway(mobileNavRef, () => {
    setShowMobileMenu(false);
  });
  return (
    <>
      <nav className="border-gray-200 bg-dracula-darker-900">
        <Layout>
          <div
            className="mx-auto flex flex-wrap items-center justify-between py-4 px-2"
            ref={mobileNavRef}
          >
            <div>
              <SocialIcons />
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="ml-3 inline-flex items-center rounded-lg p-2 text-sm hover:bg-dracula-dark focus:outline-none focus:ring-2 focus:ring-dracula-dark md:hidden"
              aria-expanded="false"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <FiMenu size={20} className="text-dracula-cyan" />
            </button>
            {/* Desktop */}
            <div className="hidden md:block">
              <ul className="mt-0 flex flex-row space-x-8 rounded-lg text-base">
                {navLinks.map((name, index) => (
                  <li key={`desktop-nav-${name}-${index}`}>
                    <Link
                      href={formatPathName(name)}
                      className="block py-2 pl-3 pr-4 capitalize"
                    >
                      <motion.div
                        whileHover={{ scale: [null, 1.1, 1.0] }}
                        transition={{ duration: 0.2 }}
                      >
                        <span
                          className={`hover:opacity-75 ${
                            pathname === formatPathName(name)
                              ? "border-b border-dracula-cyan text-dracula-cyan"
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
              <div className="block w-full md:hidden">
                <ul className="mt-4 flex flex-col rounded-lg bg-dracula-dark p-4 text-base">
                  {navLinks.map((name, index) => (
                    <li
                      className="py-2 pl-3 pr-4"
                      key={`mobile-nav-${name}-${index}`}
                    >
                      <Link
                        className="block capitalize"
                        href={formatPathName(name)}
                        onClick={() => setShowMobileMenu(false)}
                      >
                        <span
                          className={`hover:opacity-75 ${
                            pathname === formatPathName(name)
                              ? "border-b border-dracula-cyan text-dracula-cyan"
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
      <Link
        href="https://github.com/jonathanpicazo/next-portfolio"
        target="_blank"
      >
        <motion.div
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.2 }}
          className={styles.social}
        >
          <GoRepo className={`${styles.icon}`} />
        </motion.div>
      </Link>
    </div>
  );
};
