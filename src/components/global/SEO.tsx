import Head from "next/head";

export const SEO = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" property="og:title" content={title} />
      <meta
        name="description"
        property="og:description"
        content={description}
      />
      <link rel="icon" href="/favicon.png" key="favicon-logo" />
    </Head>
  );
};
