import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "resumeFile",
      title: "Resume File",
      type: "file",
    }),
  ],
});
