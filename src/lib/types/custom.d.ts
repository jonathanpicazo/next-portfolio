// SOCIALS
export type SocialLinkType = {
  url: string;
  icon: ReactElement;
  label: string;
};

// ABOUT
export type PersonalInfoType = {
  label: string;
  value: string;
  icon: ReactElement;
};

export type TechStackItem = {
  label: string;
  icon: ReactElement;
};

type TechStackArray = {
  label: string;
  items: TechStackKeys[];
};

export type TechStackKeys =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "python"
  | "c++"
  | "c"
  | "graphql"
  | "react"
  | "tailwind"
  | "react-native"
  | "next"
  | "gatsby"
  | "remix"
  | "node"
  | "express"
  | "flask"
  | "elastic-search"
  | "sanity";

// PROJECTS
export type ProjectItem = {
  title: string;
  subtitle: string;
  icon: ReactElement;
  techIcons: TechStackKeys[];
  description: string;
  link: string;
  demoLink?: string;
};

//
