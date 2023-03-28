export const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`h-full max-w-desktop md:px-10 px-1 w-full mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
