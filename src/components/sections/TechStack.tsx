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
import type { TechStackKeys } from "~/types";
import { TECH_STACK_DICTIONARY } from "~/data";

export const TechStack = () => {
  const ICON_SIZE = 25;

  type TechStackArray = {
    label: string;
    items: TechStackKeys[];
  };

  const languageArr: TechStackArray = {
    label: "Languages",
    items: ["html", "css", "python", "c++", "c", "graphql"],
  };

  const frameWorkArr: TechStackArray = {
    label: "Frameworks",
    items: [
      "react",
      "tailwind",
      "react-native",
      "next",
      "gatsby",
      "remix",
      "node",
      "express",
      "flask",
    ],
  };

  const techStackArr = [languageArr, frameWorkArr];

  return (
    <section className="flex flex-col gap-y-4">
      {techStackArr.map((el) => (
        <div key={`tech-stack-arr-${el.label}`}>
          <p className="mb-3 text-base text-dracula-pink">{el.label}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-3">
            {el.items.map((key) => {
              const item = TECH_STACK_DICTIONARY[key];
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
  );
};
