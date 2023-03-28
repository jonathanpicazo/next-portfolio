export const Header = ({ title }: { title: string }) => {
  return (
    <h1 className="text-right md:text-left mb-4 text-2xl md:text-4xl font-bold px-4 md:px-3">
      {title}
    </h1>
  );
};
