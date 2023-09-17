import React from "react";
import { twMerge } from "tailwind-merge";
export const PageCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={twMerge(
        "flex-1 rounded-lg bg-dracula-darker-900 px-[10px] pb-5 pt-4 md:mx-2.5 md:px-9",
        className
      )}
    >
      {children}
    </section>
  );
};
