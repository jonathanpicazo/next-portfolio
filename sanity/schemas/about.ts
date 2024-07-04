import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'personalImages',
      title: 'Personal Images',
      type: 'array',
      // @ts-ignore
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'aboutText',
      title: 'About Text',
      type: 'array',
      // @ts-ignore
      of: [{ type: 'text' }],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'personalImages.0',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || 'No title',
        media,
      };
    },
  },
});
