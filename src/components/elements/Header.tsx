import React from 'react';
import { twMerge } from 'tailwind-merge';

type HeaderProps = {
  title: string;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ title, className }) => (
  <h1
    className={twMerge(
      'mb-4 px-[5px] text-left text-2xl font-bold text-dracula-green md:px-3 md:text-4xl',
      className
    )}
  >
    {title}
  </h1>
);

export default Header;
