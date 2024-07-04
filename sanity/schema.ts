import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import home from './schemas/home';
import post from './schemas/post';
import education from './schemas/education';
import experience from './schemas/experience';
import proofOfWork from './schemas/proof-of-work';
import about from './schemas/about';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, education, experience, post, proofOfWork, about, blockContent],
};
