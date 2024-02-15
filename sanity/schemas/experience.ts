import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Work Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      // @ts-ignore
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startingDate',
      title: 'Started at',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endingDate',
      title: 'Ended at',
      type: 'date',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'markdown',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
