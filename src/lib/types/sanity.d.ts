import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityAsset } from "@sanity/image-url/lib/types/types";

export type BlogPostType = {
  _id: string;
  _createdAt: string;
  title: string;
  publishedAt: string;
  markdown: string;
  description: string;
  mainImage: SanityAsset;
  slug: {
    current: string;
  };
  body: [object];
};

export type EducationItemType = {
  _id: string;
  _createdAt: string;
  name: string;
  logo: SanityAsset;
  degree: string;
  location: string;
  startingDate: string;
  endingDate: string;
  message: string;
};

export type ExperienceItemType = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: {
    current: string;
  };
  logo: SanityAsset;
  title: string;
  location: string;
  startingDate: string;
  endingDate: string;
  details: string;
  content: any;
};
