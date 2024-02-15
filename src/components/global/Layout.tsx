import React from 'react';
import { useRouter } from 'next/router';
import NavBar from './NavBar';

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  const { pathname } = useRouter();
  const isStudioPath = pathname.includes('studio');
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

export default Layout;
