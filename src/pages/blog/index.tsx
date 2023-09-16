import React from "react";
import groq from "groq";
import { client } from "~/sanityClient";
import { Header, PageCard, SEO, PostCard } from "~/components";

const blogs = [{ title: "React Native Skeleton" }];

export async function getStaticProps() {
  const posts = await client.fetch(groq`*[_type == "post"]`);
  console.log("posts", posts);
  return { props: { posts } };
}

export default function Blogs({ posts }: { posts: any[] }) {
  return (
    <>
      <SEO title="Blog" description="This page is coming soon!" />

      <Header title="Blog" />
      <PageCard>
        <p>Coming soon...</p>
        {posts.map((post) => (
          <PostCard post={post} key={`post-card-${post.title}`} />
        ))}
      </PageCard>
    </>
  );
}
