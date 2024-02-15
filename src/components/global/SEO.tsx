import React from 'react';
import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
};

const SEO: React.FC<SEOProps> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" property="og:title" content={title} />
    <meta name="description" property="og:description" content={description} />
    <meta
      name="image"
      property="og:image"
      content="https://res.cloudinary.com/dgmtygobu/image/upload/v1690838852/next-portfolio/pfp_njd5wn.jpg"
    />
    <link rel="icon" href="/favicon.png" key="favicon-logo" />
  </Head>
);

export default SEO;
