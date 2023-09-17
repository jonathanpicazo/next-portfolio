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
