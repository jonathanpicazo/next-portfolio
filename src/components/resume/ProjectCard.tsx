import { TechStackIcon, Button } from '~/components';
import { techStackDictionary } from '~/data';
import { ProjectItem } from '~/lib/types';

export const ProjectCard = ({ project }: { project: ProjectItem }) => {
  return (
    <div className="border-dracula-dark flex flex-col gap-x-3 rounded-lg border px-4 py-2.5 shadow-xl">
      <div className="mb-2 flex flex-row items-center justify-between">
        <div>
          <p className="text-heading text-dracula-purple mb-1 text-lg font-semibold">
            {project.title}
          </p>
          <p className="bg-dracula-dark text-dracula-cyan w-fit rounded-full px-3 py-2 text-sm">
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
      <p className="text-dracula-light mt-2 text-base">{project.description}</p>
      <div className="mt-4">
        <a target="_blank" href={project.link} rel="noreferrer">
          <Button>View Repo</Button>
        </a>
      </div>
    </div>
  );
};
