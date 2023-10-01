import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { useClickAway } from "react-use";
import { twMerge } from "tailwind-merge";
import { SocialList } from "~/components";
import { navLinks } from "~/data";
import { formatPathName } from "~/lib/utils";

export const MobileList = ({
  showMobileMenu,
  setShowMobileMenu,
}: {
  showMobileMenu: boolean;
  setShowMobileMenu: (state: boolean) => void;
}) => {
  const { pathname } = useRouter();
  const drawerVariants = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      className="block w-full md:hidden"
      animate={showMobileMenu ? "visible" : "hidden"}
      variants={drawerVariants}
      initial="hidden"
      exit="hidden"
    >
      <ul className="mt-4 flex flex-col rounded-lg bg-dracula-dark px-1 py-4 text-base">
        {navLinks.map((name, index) => (
          <li className="py-2 pl-3 pr-4" key={`mobile-nav-${name}-${index}`}>
            <Link
              className="block capitalize"
              href={formatPathName(name)}
              onClick={() => setShowMobileMenu(false)}
            >
              <span
                className={twMerge(
                  "hover:opacity-75",
                  pathname.includes(formatPathName(name))
                    ? "border-b border-dracula-cyan text-dracula-cyan"
                    : "text-dracula-light"
                )}
              >
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const DesktopList = () => {
  const { pathname } = useRouter();
  const isSelectedPath = (name: string) => {
    if (pathname === "/" && name === "home") {
      return true;
    } else {
      return name !== "home" && pathname.includes(formatPathName(name));
    }
  };
  return (
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
                  className={twMerge(
                    "hover:opacity-75",
                    isSelectedPath(name)
                      ? "border-b border-dracula-cyan text-dracula-cyan"
                      : "text-dracula-light"
                  )}
                >
                  {name}
                </span>
              </motion.div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const NavBar = () => {
  const { pathname } = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileNavRef = useRef(null);
  useClickAway(mobileNavRef, () => {
    setShowMobileMenu(false);
  });
  const isSelectedPath = (name: string) => {
    if (pathname === "/" && name === "home") {
      return true;
    } else {
      return name !== "home" && pathname.includes(formatPathName(name));
    }
  };
  return (
    <nav className="mx-auto max-w-desktop border-gray-200 bg-dracula-darker-900 md:px-10">
      <div
        className="mx-auto flex flex-wrap items-center justify-between px-2 py-4"
        ref={mobileNavRef}
      >
        <SocialList length={3} />

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
        <DesktopList />
        {/* Mobile */}
        <AnimatePresence>
          {showMobileMenu && (
            <MobileList
              setShowMobileMenu={setShowMobileMenu}
              showMobileMenu={showMobileMenu}
            />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
