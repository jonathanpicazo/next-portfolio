import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonPropType = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const buttonStyles =
  'sm:w-auto w-full rounded-lg bg-dracula-purple-500 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-dracula-purple-600 focus:outline-none focus:ring-4 focus:ring-dracula-blue-300';

const Button: React.FC<ButtonPropType> = ({
  children,
  ...props
}: ButtonPropType) => (
  <button className={twMerge(buttonStyles, props!.className)}>
    {children}
  </button>
);

export default Button;
