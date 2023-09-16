import React from "react";
import {
  Header,
  PageCard,
  SEO,
  ProjectCard,
  ResumeCard,
  SubHeader,
} from "~/components";
import { resumeCards, projectList } from "~/data";

export default function Resume() {
  return (
    <>
      <SEO title="Resume" description="Resume" />
      <Header title="Resume" />
      <section>
        <div className="flex flex-col gap-5 md:flex-row md:gap-0">
          {resumeCards.map((el, index) => (
            <PageCard key={`resume-card-${index}`}>
              <SubHeader as="h3" className="mb-3 text-xl text-dracula-pink">
                {el.header}
              </SubHeader>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {el.list.map((el, index: number) => (
                  <ResumeCard key={`card-item-${index}`} data={el} />
                ))}
              </ol>
            </PageCard>
          ))}
        </div>
        {/* Projects */}
        <PageCard className="mt-4">
          <h3 className="mb-3 text-xl text-dracula-pink">Projects</h3>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
            {projectList.map((project) => (
              <ProjectCard
                project={project}
                key={`project-list-${project.title}`}
              />
            ))}
          </div>
        </PageCard>
      </section>
    </>
  );
}
