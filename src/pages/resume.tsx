import React from "react";

import { ResumeCardList, Header, Layout } from "~/components";
import { resumeCards } from "~/data";

const Resume = () => {
  return (
    <Layout>
      <main className="resume">
        <Header title="Resume" />
        <section>
          <div className="flex flex-col md:flex-row gap-5 md:gap-0">
            {resumeCards.map((el, index) => (
              <ResumeCardList
                list={el.list}
                header={el.header}
                key={`resume-card-${index}`}
              />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Resume;
