import { client } from "~/sanity-client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

export const urlFor = (source: SanityImageSource) => {
  const builder = createImageUrlBuilder(client);
  return builder.image(source);
};
