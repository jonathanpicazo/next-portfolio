import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import CardList from "components/card-list";
import { resumeCards } from "data/resume";
const Resume = () => {
  const tw = {};
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <section>
            <div className="flex">
              {resumeCards.map((el, index) => (
                <>
                  <CardList list={el.list} header={el.header} />
                </>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Resume;
