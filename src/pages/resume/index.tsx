import React from 'react';
import Link from 'next/link';
import {
  Header,
  PageCard,
  SEO,
  ProjectCard,
  SubHeader,
  EducationCard,
  ExperienceCard,
  TechStackIcon,
} from '~/components';
import { getButtonStyles } from '~/components/elements/Button';
import {
  projectList,
  siteStack,
  techStackArr,
  techStackDictionary,
} from '~/data';
import { client } from '~/sanity-client';
import { serialize } from 'next-mdx-remote/serialize';
import { EducationItemType, ExperienceItemType } from '~/lib';
import groq from 'groq';
import Lottie from 'lottie-react';
import leftLottie from '../../../public/lottie/about.json';

export async function getStaticProps() {
  type ResumeQueryType = {
    education: EducationItemType[];
    experience: ExperienceItemType[];
  };
  const { education, experience }: ResumeQueryType = await client.fetch(groq`
{
    'education': *[_type == "education"],
    'experience': *[_type == "experience"] | order(ranking asc)
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
        <PageCard className="pb-7">
          <SubHeader as="h3" className="mb-3 text-xl text-dracula-pink">
            Experience
          </SubHeader>
          <div className="relative mb-3 flex flex-col justify-between gap-3 md:mb-5 md:gap-6">
            {experience.map((el) => (
              <ExperienceCard key={`experience-card-${el._id}`} data={el} />
            ))}
          </div>
          <Link
            href="/resume/proof-of-work"
            className={getButtonStyles('primary')}
          >
            <span>View more projects and work experience</span>
          </Link>
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

        <PageCard className="mt-4 flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <SubHeader className="mb-2">Tech Stack</SubHeader>
            <div className="mb-3 flex w-full items-center justify-center md:mb-0 md:basis-1/3 md:justify-start">
              <Lottie animationData={leftLottie} />
            </div>
          </div>
          <div>
            {/* Tech Stack */}
            <section className="flex flex-col gap-y-4">
              {techStackArr.map((el) => (
                <div key={`tech-stack-arr-${el.label}`}>
                  <span className="mb-3 block text-base text-dracula-purple">
                    {el.label}
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-3">
                    {el.items.map((key) => {
                      const item = techStackDictionary[key];
                      return (
                        <TechStackIcon
                          key={`tech-stack-list-${item.label}`}
                          item={item}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>
            {/* Site Stack */}
            <section className="mt-4">
              <span className="mb-3 block text-base text-dracula-purple">
                This Site is Built With
              </span>
              <div className="flex flex-wrap gap-x-3 gap-y-3">
                {siteStack.items.map((icon) => (
                  <TechStackIcon
                    key={`site-stack-list-${icon}`}
                    item={techStackDictionary[icon]}
                  />
                ))}
              </div>
            </section>
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
