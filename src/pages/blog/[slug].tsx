/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Image from 'next/image';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { client } from '~/sanity-client';
import { Header, SEO, PageCard, AuthorCard, CodeBlock } from '~/components';
import { ALL_POST_SLUGS_QUERY, POST_QUERY } from '~/data';
import { urlFor } from '~/lib/utils';
import { BlogPostType } from '~/lib';

export async function getStaticPaths() {
  const paths: string[] = await client.fetch(ALL_POST_SLUGS_QUERY);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
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
  const date = new Date(publishedAt).toLocaleDateString();
  const components = {
    h1: () => null,

    h2: (props: any) => <h2 className="text-dracula-purple" {...props} />,
    h3: (props: any) => <h3 className="text-dracula-pink" {...props} />,
    pre: (props: any) => <pre className="!bg-dracula-darker" {...props} />,
    code: CodeBlock,
    p: (
      props: JSX.IntrinsicAttributes &
        React.ClassAttributes<HTMLParagraphElement> &
        React.HTMLAttributes<HTMLParagraphElement>
    ) => <p className="text-dracula-light" {...props} />,
    span: (
      props: JSX.IntrinsicAttributes &
        React.ClassAttributes<HTMLSpanElement> &
        React.HTMLAttributes<HTMLSpanElement>
    ) => <span className="text-dracula-light" {...props} />,
    strong: (props: any) => <strong className="text-dracula-cyan" {...props} />,
  };

  return (
    <>
      <Header title={title} />
      <SEO title={title} description={description} />

      <PageCard>
        <section className="rounded-lg">
          <div className="md:prose-md prose prose-invert">
            {mdxSource && (
              <MDXRemote {...mdxSource} components={components as any} />
            )}
          </div>
        </section>
      </PageCard>
      <PageCard className="mt-4 md:mt-6">
        <section className="px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <div className="mb-2 w-full md:mb-0">
                <Image
                  src={urlFor(mainImage).width(900).url()}
                  height={900}
                  width={900}
                  className="aspect-video w-full rounded-lg object-cover"
                  alt={mainImage.alt ?? 'Blog main image'}
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <p className="mb-2 text-dracula-yellow">{description}</p>

              <AuthorCard date={date} />
            </div>
          </div>
        </section>
      </PageCard>
    </>
  );
}
