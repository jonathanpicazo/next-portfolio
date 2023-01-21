import React from "react";
import Link from "next/link";
const DesktopNavItem = ({ name }: { name: string }) => {
  return (
    <>
      <div>
        <Link
          href={name === "home" ? "/" : `/${name}`}
          className="capitalize block py-2 pl-3 pr-4 text-dracula-light"
        >
          {name}
        </Link>
      </div>
    </>
  );
};

export default DesktopNavItem;
