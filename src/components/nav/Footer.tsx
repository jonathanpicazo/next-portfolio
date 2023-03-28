import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GoRepo } from "react-icons/go";
import { useRouter } from "next/router";

export const Footer = () => {
  const styles = {
    wrapper:
      "flex justify-between items-center py-4 max-w-[375px] w-full mx-auto py-5 px-2",
    icon: "text-4xl hover:opacity-75",
    copyright: "flex gap-x-2",
  };
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/" && (
        <footer className="flex mx-auto bg-dracula-darker">
          <ul className="flex justify-between items-center max-w-[375px] w-full mx-auto py-5 px-2 bg-dracula-darker-900">
            <li>
              <Link
                href="https://www.linkedin.com/in/jonathan-picazo/"
                target="_blank"
              >
                <FaLinkedin className={styles.icon} />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/jonathanpicazo" target="_blank">
                <FaGithub className={styles.icon} />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/jonathanpicazo/next-portfolio"
                target="_blank"
              >
                <GoRepo className={styles.icon} />
              </Link>
            </li>
            <li>
              <div className={styles.copyright}>
                <p>Jonathan Picazo</p>
                <p>© {new Date().getFullYear()}</p>
              </div>
            </li>
          </ul>
        </footer>
      )}
    </>
  );
};
