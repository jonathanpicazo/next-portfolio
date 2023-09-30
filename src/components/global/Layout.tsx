import { NavBar } from "./NavBar";
import { useRouter } from "next/router";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();
  const isStudioPath = pathname.includes("studio");
  return !isStudioPath ? (
    <div className="bg-dracula-dark">
      <div className="bg-dracula-darker">
        <NavBar />
      </div>
      <div className="mx-auto mb-4 mt-7 max-w-desktop bg-dracula-dark px-[10px] md:px-10">
        <main>{children}</main>
      </div>
    </div>
  ) : (
    <main>{children}</main>
  );
};
