import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "~/lib/utils";
import { BlogPostType } from "~/lib/types";

export const PostCard = ({ post }: { post: BlogPostType }) => {
  console.log("post", post);
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <motion.article
        className="flex flex-col rounded-lg border border-dracula-green-200"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        <Image
          alt={post.mainImage.alt ?? "Blog image"}
          src={urlFor(post.mainImage).width(500).url()}
          width={500}
          height={500}
          className="aspect-video rounded-t-lg object-cover"
          priority
        />
        <div className="p-4">
          <h4 className="mb-2 line-clamp-2">{post.title}</h4>
          <p className="mb-2 line-clamp-2">{post.description}</p>
        </div>
      </motion.article>
    </Link>
  );
};
