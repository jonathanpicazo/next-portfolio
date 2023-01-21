import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["home", "resume", "portfolio", "blog", "contact"];
  const styles = {
    desktopLink: `capitalize text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium`,
    mobileLink: `capitalize text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`,
  };
  return (
    <div>
      <nav>
        <div className="md:hidden absolute top-0 left-0 bottom-0 w-[300px]">
          <MobileNav />
        </div>
        <div className="md:block hidden bg-dracula-darker-900">
          <DesktopNav />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
