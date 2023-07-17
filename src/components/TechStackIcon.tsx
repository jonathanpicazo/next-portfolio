import { ReactElement } from "react";

export const TechStackIcon = ({
  item,
}: {
  item: { icon: ReactElement; label: string };
}) => {
  return (
    <div
      className="flex min-w-[82px] flex-col items-center justify-center gap-2"
      key={`tech-stack-list-${item.label}`}
    >
      <div className="rounded-md bg-dracula-dark p-2">{item.icon}</div>
      <span className="text-sm text-dracula-dark-600">{item.label}</span>
    </div>
  );
};
