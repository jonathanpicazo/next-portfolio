import React, { ForwardedRef } from 'react';
import { twMerge } from 'tailwind-merge';

type PageCardProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageCard = React.forwardRef<HTMLDivElement, PageCardProps>(
  (
    { children, className = '', ...props },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <section
        ref={ref}
        className={twMerge(
          'bg-dracula-darker-900 flex-1 rounded-lg px-3.5 pb-5 pt-4 shadow-md md:mx-2.5 md:px-9',
          className
        )}
      >
        {children}
      </section>
    );
  }
);

PageCard.displayName = 'PageCard';
