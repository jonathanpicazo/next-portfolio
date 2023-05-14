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
      className={`mx-3 flex-1 rounded-lg bg-dracula-darker-900 px-9 pt-4 pb-5 md:mx-2.5 ${className}`}
    >
      {children}
    </div>
  );
};
