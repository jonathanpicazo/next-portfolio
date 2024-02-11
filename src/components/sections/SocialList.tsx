import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { SocialLinkType } from '~/lib/types';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GoRepo } from 'react-icons/go';

const socialLinks: SocialLinkType[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jonathan-picazo/',
    icon: <FaLinkedin className="text-dracula-cyan text-xl" />,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/jonathanpicazo',
    icon: <FaGithub className="text-dracula-cyan text-xl" />,
  },

  // {
  //   label: "Repository",
  //   url: "https://github.com/jonathanpicazo/next-portfolio",
  //   icon: <GoRepo className="text-xl text-dracula-cyan" />,
  // },
];

export const SocialList = ({
  className = '',
  length = 2,
}: {
  className?: string;
  length?: number;
}) => {
  return (
    <section className={twMerge('flex items-center gap-x-4', className)}>
      {socialLinks.slice(0, length).map((link) => (
        <Link
          key={`social-link-component-${link.label}`}
          href={link.url}
          target="_blank"
        >
          <motion.div
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{ duration: 0.2 }}
            className="bg-dracula-darker-900 flex cursor-pointer items-center justify-center rounded-lg p-3 hover:opacity-75"
          >
            {link.icon}
          </motion.div>
        </Link>
      ))}
    </section>
  );
};
