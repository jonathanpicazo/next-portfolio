import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Company Name",
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
      title: "Work Logo",
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
      name: "title",
      title: "Job Title",
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
      name: "details",
      title: "Details",
      type: "markdown",
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
