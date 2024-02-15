import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { SocialLinkType } from '~/lib/types';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const socialLinks: SocialLinkType[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jonathan-picazo/',
    icon: <FaLinkedin className="text-xl text-dracula-cyan" />,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/jonathanpicazo',
    icon: <FaGithub className="text-xl text-dracula-cyan" />,
  },
];

type SocialListProps = {
  className?: string;
  length?: number;
};
const SocialList: React.FC<SocialListProps> = ({
  className = '',
  length = 2,
}) => (
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
          className="flex cursor-pointer items-center justify-center rounded-lg bg-dracula-darker-900 p-3 hover:opacity-75"
        >
          {link.icon}
        </motion.div>
      </Link>
    ))}
  </section>
);

export default SocialList;
