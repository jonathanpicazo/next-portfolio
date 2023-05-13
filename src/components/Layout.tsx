export const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`h-full max-w-desktop md:px-10 px-[10px] w-full mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
