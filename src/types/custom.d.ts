export type TechStackItem = {
  label: string;
  icon: ReactElement;
};

export type SocialLinkType = {
  url: string;
  icon: ReactElement;
  label: string;
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
  | "flask";
