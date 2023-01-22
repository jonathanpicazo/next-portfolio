import React from "react";
import CardList from "components/card-list";
import { resumeCards } from "data/resume";
const Resume = () => {
  return (
    <>
      <div className="h-screen max-w-desktop px-10 w-full mx-auto">
        <main className="resume">
          <h1 className="text-right md:text-left mb-4 text-2xl md:text-4xl font-bold text-dracula-cyan">
            Resume
          </h1>
          <section>
            <div className="flex flex-col md:flex-row gap-5 md:gap-0">
              {resumeCards.map((el, index) => (
                <CardList
                  list={el.list}
                  header={el.header}
                  key={`resume-card-${index}`}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Resume;
