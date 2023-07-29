import { ReactNode, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonPropType = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonPropType) => {
  const buttonStyles =
    "sm:w-auto w-full rounded-lg bg-dracula-purple-500 px-5 py-2.5 text-center text-sm font-medium text-dracula-darker-900 hover:bg-dracula-purple-600 focus:outline-none focus:ring-4 focus:ring-dracula-blue-300";
  return (
    <button className={twMerge(buttonStyles, props.className)}>
      {children}
    </button>
  );
};
