// @ts-nocheck
import { MdWork } from 'react-icons/md';

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .child(S.editor().id('home').schemaType('home').documentId('home')),
      S.listItem()
        .title('About')
        .child(S.editor().id('about').schemaType('about').documentId('about')),
      S.listItem()
        .title('Work Experience')
        .icon(MdWork)
        .schemaType('experience')
        .child(
          S.documentTypeList('experience')
            .title('Work Experience')
            .defaultOrdering([{ field: 'ranking', direction: 'asc' }])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['home', 'about', 'experience'].includes(listItem.getId())
      ),
    ]);
