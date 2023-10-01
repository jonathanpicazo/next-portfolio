import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import theme from "./schemas/theme";
import post from "./schemas/post";
import education from "./schemas/education";
import experience from "./schemas/experience";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [theme, education, experience, post, blockContent],
};
