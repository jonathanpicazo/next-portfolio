import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "data/variables";
import { useRouter } from "next/router";
import { formatPathName } from "utils/functions/format-path-name";
const DesktopNav = ({ router }: { router: any }) => {
  return (
    <>
      <nav className="bg-dracula-darker-900 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center"></div>

          <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {navLinks &&
              navLinks.map((name: string, index: number) => (
                <>
                  <li>
                    <Link
                      href={formatPathName(name)}
                      className="capitalize block py-2 pl-3 pr-4"
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
                </>
              ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default DesktopNav;
