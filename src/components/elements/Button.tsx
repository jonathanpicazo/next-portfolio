import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonPropType = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'none';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const buttonStyles =
  'sm:w-auto w-full rounded-lg bg-dracula-purple-500 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-dracula-purple-600 focus:outline-none focus:ring-4 focus:ring-dracula-blue-300';
export const getButtonStyles = (
  variant: 'primary' | 'secondary' | 'tertiary' | 'none'
) => {
  switch (variant) {
    case 'primary':
      return buttonStyles;
    case 'secondary':
      return 'rounded-lg border border-dracula-dark shadow-xl px-5 py-2.5 text-center text-sm text-dracula-purple font-bold';

    case 'tertiary':
      return 'sm:w-auto w-full rounded-lg bg-dracula-red-600 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-dracula-red-700 active:bg-dracula-red-700';
    case 'none':
      return '';
    default:
      return '';
  }
};

const Button: React.FC<ButtonPropType> = ({
  children,
  variant = 'primary',
  ...props
}: ButtonPropType) => (
  <button
    {...props}
    className={twMerge(getButtonStyles(variant), props!.className)}
  >
    {children}
  </button>
);

export default Button;
