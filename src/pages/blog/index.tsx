import React from "react";
import groq from "groq";
import { client } from "~/sanity-client";
import { Header, PageCard, SEO, PostCard } from "~/components";

export async function getStaticProps() {
  const posts = await client.fetch(groq`*[_type == "post"]`);
  return { props: { posts } };
}

export default function Blogs({ posts }: { posts: any[] }) {
  return (
    <>
      <SEO
        title="Blog"
        description="Explore my blog posts pertaining to random things."
      />

      <Header title="Blog" />
      <PageCard>
        <ul className="sm:grid-cols-1 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {posts.map((post, index) => (
            <PostCard post={post} key={`post-card-${post.title}-${index}`} />
          ))}
        </ul>
      </PageCard>
    </>
  );
}
