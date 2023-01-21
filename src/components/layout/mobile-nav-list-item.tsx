import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "data/variables";

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

export const MobileNavItem = ({ name }: { name: string }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="m-0 p-0 flex items-center cursor-pointer"
    >
      <div className="p-4">
        <Link href={name === "home" ? "/" : `/${name}`}>
          <p className="capitalize text-dracula-light hover:text-dracula-green text-xl">
            {name}
          </p>
        </Link>
      </div>
    </motion.li>
  );
};

export default MobileNavItem;
