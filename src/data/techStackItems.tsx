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

const ICON_SIZE = 25;

import type { TechStackItem, TechStackKeys } from "~/types";

export const TECH_STACK_DICTIONARY: Record<TechStackKeys, TechStackItem> = {
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
};
