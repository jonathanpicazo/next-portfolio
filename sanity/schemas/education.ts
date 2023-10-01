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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "degree",
      title: "Degree type",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startingDate",
      title: "Started at",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endingDate",
      title: "Ended at",
      type: "date",
    }),
    defineField({
      name: "message",
      title: "Message",
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
