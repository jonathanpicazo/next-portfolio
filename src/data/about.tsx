import React from "react";
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
  SiElasticsearch,
} from "react-icons/si";
import { FiSmartphone } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdCalendarViewMonth } from "react-icons/md";
import type {
  TechStackItem,
  TechStackKeys,
  TechStackArray,
  PersonalInfoType,
} from "~/types";

const ICON_SIZE = 25;
const PERSONAL_ICON_SIZE = 23;

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

export const techStackArr = [languageArr, frameWorkArr];

export const techStackDictionary: Record<TechStackKeys, TechStackItem> = {
  html: {
    label: "HTML5",
    icon: <SiHtml5 size={ICON_SIZE} className={`text-dracula-orange`} />,
  },
  css: {
    label: "CSS3",
    icon: <SiCss3 size={ICON_SIZE} className={`text-dracula-cyan`} />,
  },
  javascript: {
    label: "Javascript",
    icon: <SiJavascript size={ICON_SIZE} className={`text-dracula-yellow`} />,
  },
  typescript: {
    label: "Typescript",
    icon: <SiTypescript size={ICON_SIZE} className="text-dracula-cyan" />,
  },
  python: {
    label: "Python",
    icon: <SiPython size={ICON_SIZE} className={`text-dracula-yellow`} />,
  },
  "c++": {
    label: "C++",
    icon: <SiCplusplus size={ICON_SIZE} className="text-dracula-cyan" />,
  },
  c: {
    label: "C",
    icon: <SiC size={ICON_SIZE} className="text-dracula-cyan" />,
  },
  graphql: {
    label: "GraphQL",
    icon: <SiGraphql size={ICON_SIZE} className="text-dracula-pink" />,
  },
  react: {
    label: "React",
    icon: <SiReact size={ICON_SIZE} className="text-dracula-cyan" />,
  },
  tailwind: {
    label: "Tailwind",
    icon: <SiTailwindcss size={ICON_SIZE} className="text-dracula-cyan" />,
  },
  "react-native": {
    label: "React\nNative",
    icon: <SiReact size={ICON_SIZE} className="text-dracula-cyan" />,
  },
  next: {
    label: "Next",
    icon: <SiNextdotjs size={ICON_SIZE} className="text-dracula-black" />,
  },
  gatsby: {
    label: "Gatsby",
    icon: <SiGatsby size={ICON_SIZE} className={`text-dracula-purple`} />,
  },
  remix: {
    label: "Remix",
    icon: <SiRemix size={ICON_SIZE} className={`text-dracula-black`} />,
  },
  node: {
    label: "Node",
    icon: <SiNodedotjs size={ICON_SIZE} className={`text-dracula-green`} />,
  },
  express: {
    label: "Express",
    icon: <SiExpress size={ICON_SIZE} className={`text-dracula-black`} />,
  },
  flask: {
    label: "Flask",
    icon: <SiFlask size={ICON_SIZE} className={`text-dracula-black`} />,
  },
  "elastic-search": {
    label: "ElasticSearch",
    icon: (
      <SiElasticsearch size={ICON_SIZE} className={`text-dracula-orange`} />
    ),
  },
};

export const personalInfo: PersonalInfoType[] = [
  {
    label: "phone",
    value: "+1 (909)-784-8797",
    icon: (
      <FiSmartphone className="fill-dracula-green" size={PERSONAL_ICON_SIZE} />
    ),
  },
  {
    label: "location",
    value: "Pomona, CA, USA",
    icon: (
      <MdLocationPin className="fill-dracula-red" size={PERSONAL_ICON_SIZE} />
    ),
  },
  {
    label: "email",
    value: "jonathanpicazo@outlook.com",
    icon: <MdEmail className="fill-dracula-cyan" size={PERSONAL_ICON_SIZE} />,
  },
  {
    label: "birthday",
    value: "February 27, 1999",
    icon: (
      <MdCalendarViewMonth
        className="fill-dracula-orange"
        size={PERSONAL_ICON_SIZE}
      />
    ),
  },
];
