import React from 'react';
import { twMerge } from 'tailwind-merge';
export const PageCard = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={twMerge(
        'bg-dracula-darker-900 flex-1 rounded-lg px-3.5 pb-5 pt-4 shadow-md md:mx-2.5 md:px-9',
        className
      )}
    >
      {children}
    </section>
  );
};
