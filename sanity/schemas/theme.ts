import { defineField, defineType } from "sanity";

export default defineType({
  name: "theme",
  title: "Theme",
  type: "document",
  fields: [
    defineField({
      name: "resumeFile",
      title: "Resume File",
      type: "file",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      media: "mainImage",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
