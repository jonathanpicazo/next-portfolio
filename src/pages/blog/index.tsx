import React from "react";
import { Header, PageCard, SEO, PostCard } from "~/components";

const blogs = [{ title: "React Native Skeleton" }];

export default function Blogs() {
  return (
    <>
      <SEO title="Blog" description="This page is coming soon!" />

      <Header title="Blog" />
      <PageCard>
        <p>Coming soon...</p>
        {blogs.map((post) => (
          <PostCard post={post} key={`post-card-${post.title}`} />
        ))}
      </PageCard>
    </>
  );
}
