import * as React from "react";
import { motion } from "framer-motion";
import MobileNavItem from "./mobile-nav-item";
import { navLinks } from "data/variables";
import { RouterType } from "types";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MobileNavList = ({ router }: { router: RouterType }) => (
  <motion.ul
    className="m-0 p-6 absolute top-[100px] w-[230px]"
    variants={variants}
  >
    {navLinks.map((el: string, index: number) => (
      <MobileNavItem
        name={el}
        key={`mobile-nav-${el}-${index}`}
        router={router}
      />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];

export default MobileNavList;
