import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  const styles = {
    wrapper:
      "flex justify-between items-center py-4 max-w-[300px] w-full mx-auto py-5",
    icon: "text-4xl",
    copyright: "flex gap-x-2",
  };
  return (
    <>
      <footer className={styles.wrapper}>
        <div>
          <Link
            href="https://www.linkedin.com/in/jonathan-picazo/"
            target="_blank"
          >
            <FaLinkedin className={styles.icon} />
          </Link>
        </div>
        <div>
          <Link href="https://github.com/jonathanpicazo" target="_blank">
            <FaGithub className={styles.icon} />
          </Link>
        </div>
        <div className={styles.copyright}>
          <div>Jonathan Picazo</div>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
