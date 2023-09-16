import React from "react";
import { client } from "../../../sanity/lib/client";
import groq from "groq";

export async function getStaticPaths() {
  const posts = await client.fetch(groq`*[_type] == "post`);
}

export default function Post() {
  return (
    <div>
      <p>post</p>
    </div>
  );
}
