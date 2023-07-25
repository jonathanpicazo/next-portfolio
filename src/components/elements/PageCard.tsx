import React from "react";

export const PageCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex-1 rounded-lg bg-dracula-darker-900 px-[10px] pt-4 pb-5 md:mx-2.5 md:px-9 ${className}`}
    >
      {children}
    </div>
  );
};
