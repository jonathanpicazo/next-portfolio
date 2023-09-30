import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "School Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "logo",
      title: "School Logo",
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
    }),
    defineField({
      name: "degree",
      title: "Degree type",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "startingDate",
      title: "Started at",
      type: "datetime",
    }),
    defineField({
      name: "endingDate",
      title: "Ended at",
      type: "datetime",
    }),
    defineField({
      name: "shoutout",
      title: "Shoutout Text",
      type: "text",
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "logo",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
