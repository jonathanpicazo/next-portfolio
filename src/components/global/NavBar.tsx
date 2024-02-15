/* eslint-disable react/no-array-index-key */
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FiMenu } from 'react-icons/fi';
import { useClickAway } from 'react-use';
import { twMerge } from 'tailwind-merge';
import { SocialList } from '~/components/sections';
import { navLinks } from '~/data';
import { formatPathName } from '~/lib/utils';

type MobileListProps = {
  showMobileMenu: boolean;
  setShowMobileMenu: (state: boolean) => void;
  isSelectedPath: (path: string) => boolean;
};
const MobileList: React.FC<MobileListProps> = ({
  showMobileMenu,
  setShowMobileMenu,
  isSelectedPath,
}) => (
  <motion.div
    className="absolute z-50 block w-full bg-dracula-darker-900 px-[10px] pb-3 pt-3 md:hidden"
    animate={showMobileMenu ? 'enter' : 'hidden'}
    initial="hidden" // Set the initial state to variants.hidden
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    variants={{
      hidden: { opacity: 0, x: -0, y: 0 },
      enter: { opacity: 1, x: 0, y: 1 },
      exit: { opacity: 0, x: 0, y: -100 },
    }}
  >
    <ul className="flex flex-col rounded-lg bg-dracula-dark px-1 py-4 text-base">
      {navLinks.map((name, index) => (
        <li className="py-2 pl-3 pr-4" key={`mobile-nav-${name}-${index}`}>
          <Link
            className="block capitalize"
            href={formatPathName(name)}
            onClick={() => setShowMobileMenu(false)}
          >
            <span
              className={twMerge(
                'hover:opacity-75',
                isSelectedPath(name)
                  ? 'border-b border-dracula-cyan text-dracula-cyan'
                  : 'text-dracula-light'
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

type DesktopListProps = {
  isSelectedPath: (path: string) => boolean;
};
const DesktopList: React.FC<DesktopListProps> = ({ isSelectedPath }) => (
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
                  'hover:opacity-75',
                  isSelectedPath(name)
                    ? 'border-b border-dracula-cyan text-dracula-cyan'
                    : 'text-dracula-light'
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

const NavBar: React.FC = () => {
  const { pathname } = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isSelectedPath = (name: string) => {
    if (pathname === '/' && name === 'home') {
      return true;
    }
    return name !== 'home' && pathname.includes(formatPathName(name));
  };
  const mobileNavRef = useRef(null);
  useClickAway(mobileNavRef, () => {
    setShowMobileMenu(false);
  });
  return (
    <div className="relative shadow-md" ref={mobileNavRef}>
      <nav className="mx-auto max-w-desktop border-gray-200 bg-dracula-darker-900 md:px-10">
        <div className="mx-auto flex flex-wrap items-center justify-between px-2 py-4">
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
          <DesktopList isSelectedPath={isSelectedPath} />
          {/* Mobile */}
        </div>
      </nav>
      {showMobileMenu && (
        <MobileList
          isSelectedPath={isSelectedPath}
          setShowMobileMenu={setShowMobileMenu}
          showMobileMenu={showMobileMenu}
        />
      )}
    </div>
  );
};

export default NavBar;
