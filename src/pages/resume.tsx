import React from "react";

import {
  ResumeCardList,
  Header,
  Layout,
  ProjectExperience,
  PageCard,
  SEO,
} from "~/components";
import { resumeCards } from "~/data";

const Resume = () => {
  return (
    <>
      <SEO title="Resume" description="Resume" />

      <Header title="Resume" />
      <section>
        <div className="flex flex-col gap-5 md:flex-row md:gap-0">
          {resumeCards.map((el, index) => (
            <ResumeCardList
              list={el.list}
              header={el.header}
              key={`resume-card-${index}`}
            />
          ))}
        </div>
        {/* Projects */}
        <PageCard className="mt-4">
          <ProjectExperience />
        </PageCard>
      </section>
    </>
  );
};

export default Resume;
