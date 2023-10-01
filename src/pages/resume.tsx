import React from "react";
import {
  Header,
  PageCard,
  SEO,
  ProjectCard,
  SubHeader,
  EducationCard,
  ExperienceCard,
} from "~/components";
import { resumeCards, projectList } from "~/data";
import { client } from "~/sanity-client";
import { serialize } from "next-mdx-remote/serialize";
import { EducationItemType, ExperienceItemType } from "~/lib";
import groq from "groq";

export async function getStaticProps() {
  type ResumeQueryType = {
    education: EducationItemType[];
    experience: ExperienceItemType[];
  };
  const a = JSON.stringify({
    education: groq`*[_type == "education"]`,
    experience: '*[_type == "experience"]',
  });
  const b = groq`
  {
    'education': *[_type == "education"],
    'experience': *[_type == "experience"]
  }
`;
  console.log("a", a);
  console.log("b");
  console.log("bool", a === b);
  const { education, experience }: ResumeQueryType = await client.fetch(groq`
  {
    'education': *[_type == "education"],
    'experience': *[_type == "experience"]
  }
`);
  return {
    props: {
      education,
      experience: await Promise.all(
        experience.map(async (el) => {
          const content = await serialize(el.details);
          return { ...el, content };
        })
      ),
    },
  };
}

export default function Resume({
  education,
  experience,
}: {
  education: EducationItemType[];
  experience: ExperienceItemType[];
}) {
  return (
    <>
      <SEO title="Resume" description="Resume" />
      <Header title="Resume" />
      <section>
        <PageCard>
          <SubHeader as="h3" className="mb-3 text-xl text-dracula-pink">
            Experience
          </SubHeader>
          <div className="relative flex flex-col justify-between">
            {experience.map((el) => (
              <ExperienceCard key={`experience-card-${el._id}`} data={el} />
            ))}
          </div>
        </PageCard>

        <PageCard className="mt-4">
          <SubHeader as="h3" className="mb-3 text-xl text-dracula-pink">
            Education
          </SubHeader>
          <div className="relative flex flex-col justify-between md:flex-row">
            {education.map((el) => (
              <EducationCard key={`education-card-${el._id}`} data={el} />
            ))}
          </div>
        </PageCard>

        {/* Projects */}
        <PageCard className="mt-4">
          <SubHeader as="h3" className="mb-3 text-xl text-dracula-pink">
            Projects
          </SubHeader>
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
