import { nanoid } from "nanoid";
import { ReactElement } from "react";
import {
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiCss3,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiGatsby,
  SiRemix,
  SiExpress,
  SiNodedotjs,
  SiC,
  SiFlask,
  SiNba,
  SiShopify,
} from "react-icons/si";
import { BiMicrochip } from "react-icons/bi";

import { TechStackIcon } from "../sections/TechStackIcon";
import { Button } from "../elements";

import type { TechStackItem } from "~/types";

const TECH_ICON_SIZE = 35;

import { TechStackKeys } from "~/types";
import { TECH_STACK_DICTIONARY } from "~/data";

type ProjectItem = {
  title: string;
  subtitle: string;
  icon: ReactElement;
  techIcons: TechStackKeys[];
  description: string;
  link: string;
  demoLink?: string;
};

export const ProjectExperience = () => {
  const projectList: ProjectItem[] = [
    {
      title: "Metafield Migration Tool",
      subtitle: "APIs",
      icon: <SiShopify className={`text-[50px] text-dracula-orange`} />,
      techIcons: ["node", "graphql"],
      description:
        "The web application uses an existing NBA statistics database from Kaggle to perform search queries. This application is essentially a search application for specific NBA statistics (best home team, best shooter, etc.). This project made me comfortable with having a backend (Flask server) communicate with the frontend (React).",
      link: "https://github.com/jonathanpicazo/NBA-Stats-React",
    },
    {
      title: "NBA Stats App",
      subtitle: "Web Development",
      icon: <SiNba className={`text-[50px] text-dracula-orange`} />,
      techIcons: ["react", "flask"],
      description:
        "The web application uses an existing NBA statistics database from Kaggle to perform search queries. This application is essentially a search application for specific NBA statistics (best home team, best shooter, etc.). This project made me comfortable with having a backend (Flask server) communicate with the frontend (React).",
      link: "https://github.com/jonathanpicazo/NBA-Stats-React",
    },
    {
      title: "LED PONG",
      subtitle: "Embedded Systems",
      icon: <BiMicrochip className={`text-[50px] text-dracula-orange`} />,
      techIcons: ["c"],
      description:
        "I recreated Pong on a breadboard with an ATMega1284. The game is displayed on a 8x8 LED Matrix. There are two buttons for each player to control the paddle. I used avr-gdb for debugging purposes.",
      link: "https://github.com/jonathanpicazo/LED-Pong",
    },
  ];

  return (
    <section>
      <h3 className="mb-3 text-xl text-dracula-pink">Projects</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
        {projectList.map((project) => (
          <ProjectCard
            project={project}
            key={`project-list-${project.title}`}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: ProjectItem }) => {
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
          {/* <p>Tech Stack used</p> */}
          <div className="flex">
            {project.techIcons.map((tiKey, index) => {
              const item = TECH_STACK_DICTIONARY[tiKey];
              return (
                <TechStackIcon
                  item={item}
                  key={`project-tech-stack-icon-${project.title}-${item.label}`}
                />
              );
            })}
          </div>
        </div>
      )}

      <p className="mt-2 text-base text-dracula-light">{project.description}</p>
      <div className="mt-4">
        <a target="_blank" href={project.link} rel="noreferrer">
          <Button>Link to repo</Button>
        </a>
      </div>
    </div>
  );
};
