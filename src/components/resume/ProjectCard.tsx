import { TechStackIcon, Button } from "~/components";
import { techStackDictionary } from "~/data";
import { ProjectItem } from "~/types";

export const ProjectCard = ({ project }: { project: ProjectItem }) => {
  return (
    <div className="flex flex-col gap-x-3 rounded-lg border border-dracula-light px-4 py-2.5">
      <div className="mb-2 flex flex-row items-center justify-between">
        <div>
          <p className="text-heading mb-1 text-lg font-semibold text-dracula-purple">
            {project.title}
          </p>
          <p className="w-fit rounded-full bg-dracula-dark py-2 px-3 text-sm text-dracula-cyan">
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
      <p className="mt-2 text-base text-dracula-light">{project.description}</p>
      <div className="mt-4">
        <a target="_blank" href={project.link} rel="noreferrer">
          <Button>View Repo</Button>
        </a>
      </div>
    </div>
  );
};
