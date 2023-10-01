import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import post from "./schemas/post";
import education from "./schemas/education";
import experience from "./schemas/experience";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, education, experience, blockContent],
};
