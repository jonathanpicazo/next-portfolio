import React, { useState } from "react";
import Image from "next/image";
import { navLinks } from "data/variables";
import DesktopNavItem from "./desktop-nav-item";
import { useRouter } from "next/router";
const DesktopNav = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <>
      <nav className="bg-dracula-darker-900 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Picazo
            </span>
          </a>

          <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
            {navLinks &&
              navLinks.map((name: string, index: number) => (
                <>
                  <li>
                    <DesktopNavItem name={name} />
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
