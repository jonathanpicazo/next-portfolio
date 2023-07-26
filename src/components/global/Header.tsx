import { twMerge } from "tailwind-merge";

export const Header = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1
      className={twMerge(
        "mb-4 px-[5px] text-left text-2xl font-bold text-dracula-green md:px-3 md:text-4xl",
        className
      )}
    >
      {title}
    </h1>
  );
};
