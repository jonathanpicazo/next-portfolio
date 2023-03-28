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
      className={`flex-1 md:mx-2.5 mx-3 rounded-lg bg-dracula-darker-900 px-9 py-4 ${className}`}
    >
      {children}
    </div>
  );
};
