import React from 'react';
import { Button } from '~/components/elements';
import { TechStackIcon } from '~/components/sections';
import { techStackDictionary } from '~/data';
import { ProjectItem } from '~/lib/types';

type ProjectCardProps = {
  project: ProjectItem;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="flex flex-col gap-x-3 rounded-lg border border-dracula-dark px-4 py-2.5 shadow-xl">
    <div className="mb-2 flex flex-row items-center justify-between">
      <div>
        <p className="text-heading mb-1 text-lg font-semibold text-dracula-purple">
          {project.title}
        </p>
        <p className="w-fit rounded-full bg-dracula-dark px-3 py-2 text-sm text-dracula-cyan">
          {project.subtitle}
        </p>
      </div>
      <div>{project.icon}</div>
    </div>
    {project.techIcons.length > 0 && (
      <div className="mt-1">
        <div className="flex">
          {project.techIcons.map((tiKey) => {
            const item = techStackDictionary[tiKey];
            return (
              <TechStackIcon
                item={item}
                key={`${project.title}-tech-stack-icon-${item.label}`}
              />
            );
          })}
        </div>
      </div>
    )}
    <p className="mt-2 flex-1 text-base text-dracula-light">
      {project.description}
    </p>
    <div className="mt-4">
      <a target="_blank" href={project.link} rel="noreferrer">
        <Button>View Repo</Button>
      </a>
    </div>
  </div>
);

export default ProjectCard;
