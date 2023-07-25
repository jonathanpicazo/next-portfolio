export type TechStackItem = {
  label: string;
  icon: ReactElement;
};

export type TechStackArray = {
  label: string;
  items: TechStackItem[];
};

export type SocialLinkType = {
  url: string;
  icon: ReactElement;
  label: string;
};
