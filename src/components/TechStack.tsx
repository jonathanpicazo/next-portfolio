import React, { ReactElement } from "react";
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
} from "react-icons/si";

import { TechStackIcon } from "./TechStackIcon";
import type { TechStackArray } from "~/types";

export const TechStack = () => {
  const ICON_SIZE = 25;

  const languageArr: TechStackArray = {
    label: "Languages",
    items: [
      {
        label: "HTML5",
        icon: <SiHtml5 size={ICON_SIZE} className={`text-dracula-orange`} />,
      },
      {
        label: "CSS3",
        icon: <SiCss3 size={ICON_SIZE} className={`text-dracula-cyan`} />,
      },
      {
        label: "Javascript",
        icon: (
          <SiJavascript size={ICON_SIZE} className={`text-dracula-yellow`} />
        ),
      },

      {
        label: "Typescript",
        icon: <SiTypescript size={ICON_SIZE} className="text-dracula-cyan" />,
      },
      {
        label: "Python",
        icon: <SiPython size={ICON_SIZE} className={`text-dracula-yellow`} />,
      },
      {
        label: "C++",
        icon: <SiCplusplus size={ICON_SIZE} className="text-dracula-cyan" />,
      },
      {
        label: "C",
        icon: <SiC size={ICON_SIZE} className="text-dracula-cyan" />,
      },
      {
        label: "GraphQL",
        icon: <SiGraphql size={ICON_SIZE} className="text-dracula-pink" />,
      },
    ],
  };

  const frameWorkArr: TechStackArray = {
    label: "Frameworks",
    items: [
      {
        label: "React",
        icon: <SiReact size={ICON_SIZE} className="text-dracula-cyan" />,
      },
      {
        label: "Tailwind",
        icon: <SiTailwindcss size={ICON_SIZE} className="text-dracula-cyan" />,
      },
      {
        label: "React\nNative",
        icon: <SiReact size={ICON_SIZE} className="text-dracula-cyan" />,
      },
      {
        label: "Next",
        icon: <SiNextdotjs size={ICON_SIZE} className="text-dracula-black" />,
      },
      {
        label: "Gatsby",
        icon: <SiGatsby size={ICON_SIZE} className={`text-dracula-purple`} />,
      },
      {
        label: "Remix",
        icon: <SiRemix size={ICON_SIZE} className={`text-dracula-black`} />,
      },
      {
        label: "Node",
        icon: <SiNodedotjs size={ICON_SIZE} className={`text-dracula-green`} />,
      },
      {
        label: "Express",
        icon: <SiExpress size={ICON_SIZE} className={`text-dracula-black`} />,
      },
      {
        label: "Flask",
        icon: <SiFlask size={ICON_SIZE} className={`text-dracula-black`} />,
      },
    ],
  };

  const techStackArr = [languageArr, frameWorkArr];

  return (
    <section className="flex flex-col gap-y-4">
      {techStackArr.map((el) => (
        <div key={`tech-stack-arr-${el.label}`}>
          <p className="mb-3 text-base text-dracula-pink">{el.label}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-3">
            {el.items.map((item) => (
              <TechStackIcon
                key={`tech-stack-list-${item.label}`}
                item={item}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
