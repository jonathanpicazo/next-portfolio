import React, { ReactElement } from 'react';

type TechStackIconProps = {
  item: { icon: ReactElement; label: string };
};

const TechStackIcon: React.FC<TechStackIconProps> = ({ item }) => (
  <div
    className="flex min-w-20.5 flex-col items-center justify-center gap-2"
    key={`tech-stack-list-${item.label}`}
  >
    <div className="bg-dracula-dark rounded-md p-2">{item.icon}</div>
    <span className="text-dracula-dark-600 text-sm">{item.label}</span>
  </div>
);

export default TechStackIcon;
