import groq from 'groq';

export const ALL_POST_SLUGS_QUERY = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
