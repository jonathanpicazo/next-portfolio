import React from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { client } from "~/sanityClient";
import { Header, SEO, PageCard } from "~/components";
import { ALL_POST_SLUGS_QUERY, POST_QUERY } from "~/data";
import { urlFor } from "~/lib/utils";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { Test } from "~/components/mdx";

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
  const mdxSource = await serialize(data.markdown);

  return {
    props: {
      data,
      mdxSource,
    },
  };
}
type PostProps = {
  data: any;
  mdxSource: MDXRemoteSerializeResult;
};
export default function Post({ data, mdxSource }: PostProps) {
  const { title, description, mainImage, publishedAt } = data;
  console.log("data", data);
  console.log("mdxsource", mdxSource);
  const { compiledSource } = mdxSource;

  return (
    <>
      <Header title={title} />
      <SEO title={title} description="blog article" />
      <PageCard>
        <section className="px-4">
          <div className="w-full">
            <Image
              src={urlFor(mainImage).width(500).url()}
              height={400}
              width={400}
              className="aspect-video w-full rounded-lg object-cover"
              alt={mainImage.alt ?? "Blog main image"}
            />
          </div>
          <p>{description}</p>
          <p>{publishedAt}</p>
          <section className="rounded-lg p-4">
            <div className="lg:prose-xl prose prose-invert rounded-lg border-2 border-dracula-green p-2 md:prose-lg md:p-5">
              {mdxSource && <MDXRemote {...mdxSource} />}
            </div>
          </section>
        </section>
      </PageCard>
    </>
  );
}
