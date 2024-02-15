import React from 'react';
import { twMerge } from 'tailwind-merge';

type SubHeaderType = {
  as?: React.ElementType;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

const SubHeader: React.FC<SubHeaderType> = ({
  as: Component = 'h4',
  children,
  ...props
}) => (
  <Component
    {...props}
    className={twMerge(props!.className, 'mb-3 text-xl text-dracula-pink')}
  >
    {children}
  </Component>
);

export default SubHeader;
