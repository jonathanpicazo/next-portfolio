import React from "react";
import groq from "groq";
import { client } from "~/sanity-client";
import { Header, PageCard, SEO, PostCard } from "~/components";
import { BlogPostType } from "~/lib";

export async function getStaticProps() {
  const posts = await client.fetch(groq`*[_type == "post"]`);
  return { props: { posts } };
}

export default function Blogs({ posts }: { posts: BlogPostType[] }) {
  return (
    <>
      <SEO
        title="Blog"
        description="Explore my blog posts pertaining to random things."
      />

      <Header title="Blog" />
      <PageCard>
        <ul className="grid grid-cols-1 gap-4 ipad:grid-cols-2 md:grid-cols-3 md:gap-6">
          {posts.map((post, index) => (
            <PostCard post={post} key={`post-card-${post.title}-${index}`} />
          ))}
        </ul>
      </PageCard>
    </>
  );
}
