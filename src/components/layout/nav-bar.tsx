import React, { useState } from "react";
import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";
import { useRouter } from "next/router";
function Nav() {
  const router = useRouter();
  const styles = {
    desktopLink: `capitalize text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium`,
    mobileLink: `capitalize text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`,
  };
  return (
    <nav>
      <div className="md:hidden absolute top-0 left-0 bottom-0 w-[300px]">
        <MobileNav router={router} />
      </div>
      <div className="md:block hidden bg-dracula-darker-900">
        <DesktopNav router={router} />
      </div>
    </nav>
  );
}

export default Nav;
