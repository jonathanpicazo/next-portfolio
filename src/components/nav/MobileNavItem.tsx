import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { navLinks } from "~/data";
import { formatPathName } from "~/utils";
import { RouterType } from "~/types";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const itemIds = [0, 1, 2, 3, 4];

export const MobileNavItem = ({
  name,
  router,
  toggleOpen,
}: {
  name: string;
  router: RouterType;
  toggleOpen: any;
}) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="m-0 p-0 flex items-center cursor-pointer capitalize hover:text-dracula-green text-xl"
    >
      <Link
        href={formatPathName(name)}
        className="p-4"
        onClick={() => {
          toggleOpen();
        }}
      >
        <span
          className={
            router.pathname === formatPathName(name)
              ? "text-dracula-cyan border-b border-dracula-cyan"
              : "text-dracula-light"
          }
        >
          {name}
        </span>
      </Link>
    </motion.li>
  );
};
