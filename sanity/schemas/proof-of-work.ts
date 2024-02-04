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
      of: [defineArrayMember({ type: 'image' })],
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
