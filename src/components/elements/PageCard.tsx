import React, { ForwardedRef } from 'react';
import { twMerge } from 'tailwind-merge';

type PageCardProps = {
  children: React.ReactNode;
  className?: string;
};

const PageCard = React.forwardRef<HTMLDivElement, PageCardProps>(
  ({ children, className = '' }, ref: ForwardedRef<HTMLDivElement>) => (
    <section
      ref={ref}
      className={twMerge(
        'flex-1 rounded-lg bg-dracula-darker-900 px-3.5 pb-5 pt-4 shadow-md md:mx-2.5 md:px-9',
        className
      )}
    >
      {children}
    </section>
  )
);

PageCard.displayName = 'PageCard';

export default PageCard;
