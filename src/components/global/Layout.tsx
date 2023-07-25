import { NavBar } from "./NavBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-dracula-dark">
      <div className="bg-dracula-darker">
        <NavBar />
      </div>
      <div className="mx-auto mb-4 mt-7 max-w-desktop bg-dracula-dark px-[5px] md:px-10">
        <main>{children}</main>
      </div>
    </div>
  );
};
