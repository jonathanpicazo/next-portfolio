// @ts-nocheck
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .child(S.editor().id('home').schemaType('home').documentId('home')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['home'].includes(listItem.getId())
      ),
    ]);
