import { defineField, defineType, defineArrayMember } from 'sanity';

export default defineType({
  name: 'proof-of-work',
  title: 'Work Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'context',
      title: 'Context',
      type: 'string',
    }),
    defineField({
      name: 'previewImage',
      title: 'Preview Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'markdown',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      type: 'array',
      // @ts-ignore
      of: [defineArrayMember({ type: 'file', name: 'file', title: 'File' })],
      name: 'media',
      title: 'Media',
    }),
    defineField({
      type: 'array',
      // @ts-ignore
      of: [defineArrayMember({ type: 'string' })],
      name: 'featuredTechnologies',
      title: 'Featured Technologies',
    }),
    defineField({
      type: 'array',
      // @ts-ignore
      of: [defineArrayMember({ type: 'string' })],
      name: 'technologies',
      title: 'Technologies',
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Web', value: 'web' },
          { title: 'App', value: 'app' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ogTitle',
      title: 'OG Title',
      type: 'string',
    }),
    defineField({
      name: 'ogDescription',
      title: 'OG Description',
      type: 'text',
    }),
    defineField({
      name: 'ranking',
      title: 'Ranking',
      type: 'number',
      description: 'A number to rank the work experience for sorting purposes.',
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
