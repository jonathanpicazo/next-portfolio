import React from "react";
import { client } from "~/sanityClient";
import { BlogPostType } from "~/lib/types";
import { Header, SEO, PageCard } from "~/components";
import { ALL_POST_SLUGS_QUERY, POST_QUERY } from "~/data";

export async function getStaticPaths() {
  const paths: string[] = await client.fetch(ALL_POST_SLUGS_QUERY);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const slug = { params };
  const handle = slug.params.slug;
  const data = await client.fetch(POST_QUERY, { slug: handle });
  return {
    props: {
      data,
    },
  };
}
type PostProps = {
  data: BlogPostType;
};
export default function Post({ data }: PostProps) {
  console.log("data", data);
  return (
    <>
      <Header title={data.title} />
      <SEO title={data.title} description="blog article" />
      <PageCard>
        <p>post</p>
      </PageCard>
    </>
  );
}
