import React, { ReactElement } from "react";
import { Box, Button } from "dracula-ui";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks: { url: string; icon: ReactElement; label: string }[] = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/jonathan-picazo/",
    icon: <FaLinkedin className="text-xl text-dracula-orange" />,
  },
  {
    label: "GitHub",
    url: "https://github.com/jonathanpicazo",
    icon: <FaGithub className="text-xl text-dracula-orange" />,
  },
];

export const SocialList = () => {
  return (
    <>
      <section className="mb-7 mt-4 flex gap-x-4">
        {socialLinks.map((link) => (
          <Link
            key={`social-link-component-${link.label}`}
            href={link.url}
            target="_blank"
          >
            <motion.div
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.2 }}
              className="flex cursor-pointer items-center justify-center rounded-lg bg-dracula-darker-900 p-3 hover:opacity-75"
            >
              {link.icon}
            </motion.div>
          </Link>
        ))}
      </section>
    </>
  );
};
