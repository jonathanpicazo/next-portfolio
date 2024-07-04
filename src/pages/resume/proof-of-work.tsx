import React from 'react';
import groq from 'groq';
import { client } from '~/sanity-client';
import { serialize } from 'next-mdx-remote/serialize';
import { ProofPage, SEO } from '~/components';
import { WorkProject } from '~/lib';

export async function getStaticProps(): Promise<{
  props: {
    data: WorkProject[];
  };
}> {
  try {
    const data = await client.fetch(
      groq`*[_type == "proof-of-work"] | order(ranking asc){
        _id,
        name,
        description,
        previewImage,
        url,
        technologies,
        featuredTechnologies,
        context,
        projectType,
        media[]{..., "url": asset->url},
        ogTitle,
        ogImage,
        ogDescription,
        details
        }
      `
    );
    const serializedData = await Promise.all(
      data.map(async (item: any) => ({
        ...item,
        mdxSource: await serialize(item.details),
      }))
    );

    return { props: { data: serializedData } };
  } catch (error) {
    // console.error('Error while fetching static props', error);
    return { props: { data: [] } };
  }
}

type ProofOfWorkProps = {
  data: WorkProject[];
};
export default function ProofOfWork({ data }: ProofOfWorkProps) {
  return (
    <>
      <SEO title="Proof Of Work" description="View my projects." />
      <ProofPage data={data} />
    </>
  );
}
