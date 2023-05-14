export const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`mx-auto mb-4 h-full w-full max-w-desktop px-[10px] md:px-10 ${className}`}
    >
      {children}
    </div>
  );
};
