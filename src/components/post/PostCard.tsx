import React from "react";
import { twMerge } from "tailwind-merge";
import { BlogPostType } from "~/types";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "~/sanityClient";
import { urlFor } from "~/utils";

export const PostCard = ({ post }: { post: BlogPostType }) => {
  console.log("post card", post);
  console.log("image", urlFor(post.mainImage).width(500).url());
  return (
    <article className="flex max-w-md flex-col rounded-lg border border-dracula-green-200">
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
  );
};
