import React from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { client } from "~/sanityClient";
import { Header, SEO, PageCard, AuthorCard } from "~/components";
import { ALL_POST_SLUGS_QUERY, POST_QUERY } from "~/data";
import { urlFor } from "~/lib/utils";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { BlogPostType } from "~/lib";

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
  const data: BlogPostType = await client.fetch(POST_QUERY, { slug: handle });
  const mdxSource = await serialize(data.markdown);

  return {
    props: {
      data,
      mdxSource,
    },
  };
}
type PostProps = {
  data: BlogPostType;
  mdxSource: MDXRemoteSerializeResult;
};
export default function Post({ data, mdxSource }: PostProps) {
  const { title, description, mainImage, publishedAt } = data;

  return (
    <>
      <Header title={title} />
      <SEO title={title} description="blog article" />
      <PageCard>
        <section className="px-4">
          <div className="md:grid-re grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <div className="mb-2 w-full">
                <Image
                  src={urlFor(mainImage).width(900).url()}
                  height={900}
                  width={900}
                  className="aspect-video w-full rounded-lg object-cover"
                  alt={mainImage.alt ?? "Blog main image"}
                  priority
                />
              </div>
              <p className="mb-2 text-dracula-yellow">{description}</p>
              <p className="mb-2 text-dracula-pink">{publishedAt}</p>
            </div>
            <div className="flex flex-col items-end">
              <AuthorCard />
            </div>
          </div>
        </section>
      </PageCard>
      <PageCard className="mt-4 md:mt-6">
        <section className="rounded-lg md:mt-8">
          <div className="md:prose-md prose prose-invert">
            {mdxSource && <MDXRemote {...mdxSource} />}
          </div>
        </section>
      </PageCard>
    </>
  );
}
