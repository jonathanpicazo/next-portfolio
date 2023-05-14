export const Header = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1
      className={`mb-4 px-4 text-left text-2xl font-bold md:px-3 md:text-4xl ${className}`}
    >
      {title}
    </h1>
  );
};
