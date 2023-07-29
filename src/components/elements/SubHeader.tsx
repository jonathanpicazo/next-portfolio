import { twMerge } from "tailwind-merge";

type SubHeaderType = {
  as?: React.ElementType;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const SubHeader = ({
  as: Component = "h4",
  children,
  ...props
}: SubHeaderType) => {
  return (
    <Component
      {...props}
      className={twMerge(props.className, "mb-3 text-xl text-dracula-pink")}
    >
      {children}
    </Component>
  );
};
