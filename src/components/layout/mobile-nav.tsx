import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "utils/hooks/use-dimensions";
import MobileNavList from "./mobile-nav.list";
import MobileNavToggle from "./mobile-nav-toggle";
import { RouterType } from "types";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileNav = ({ router }: { router: RouterType }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className="absolute top-0 left-0 bottom-0 z-10">
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className="bg-dracula-darker-900 absolute top-0 left-0 bottom-0 w-[300px]"
          variants={sidebar}
        />
        <MobileNavList router={router} />
        <MobileNavToggle toggle={() => toggleOpen()} />
      </motion.div>
    </div>
  );
};

export default MobileNav;
