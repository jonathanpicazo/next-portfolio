import { client } from "~/sanity-client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const urlFor = (source: SanityImageSource) => {
  const builder = imageUrlBuilder(client);
  return builder.image(source);
};
