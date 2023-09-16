import React from "react";
import { BlogPostType } from "~/lib/types";
import Image from "next/image";
import { urlFor } from "~/lib/utils";
import Link from "next/link";
import motion from "framer-motion";

export const PostCard = ({ post }: { post: BlogPostType }) => {
  console.log("post card", post);
  console.log("image", urlFor(post.mainImage).width(500).url());
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <article className="flex flex-col rounded-lg border border-dracula-green-200">
        <Image
          alt={post.mainImage.alt}
          src={urlFor(post.mainImage).width(500).url()}
          width={500}
          height={500}
          className="aspect-video rounded-t-lg object-cover"
        />
        <div className="p-4">
          <h4 className="mb-2">{post.title}</h4>
        </div>
      </article>
    </Link>
  );
};
