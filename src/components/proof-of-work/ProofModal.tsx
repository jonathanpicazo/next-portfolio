/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import type { WorkProject, SanityAsset } from '~/lib';
import { urlFor } from '~/lib/utils';
import AppStoreImage from '../../../public/app_store_download.svg';

type LinkPreviewProps = {
  image: SanityAsset;
  description: string;
  url: string;
  title: string;
};
const LinkPreview: React.FC<LinkPreviewProps> = ({
  image,
  description,
  url,
  title,
}) => (
  <div className="max-w-[500px] rounded-lg border border-dracula-dark shadow-xl">
    <div className="relative aspect-[1.91/1] rounded-lg">
      <Image
        alt="Open Graph Image"
        className="rounded-lg object-contain object-center"
        fill
        src={urlFor(image).width(1000).url()}
      />
    </div>
    <div className="p-3">
      <span className="mb-2 block font-myriad-pro text-dracula-purple">
        {title}
      </span>
      <span className="mb-2 block">{description}</span>
      <a
        className="text-dracula-red hover:text-dracula-red-700 active:text-dracula-red-700"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <span>Visit site</span>
      </a>
    </div>
  </div>
);

type ProofModalProps = {
  data: WorkProject;
};

const ProofModal: React.FC<ProofModalProps> = ({ data }) => {
  const {
    name,
    technologies,
    projectType,
    url,
    ogTitle,
    ogImage,
    ogDescription,
    mdxSource,
  } = data;
  const isApp = projectType === 'app';
  const isWeb = projectType === 'web';
  const components = {
    h1: () => null,

    h2: (props: any) => <h2 className="text-dracula-purple" {...props} />,
    h3: (props: any) => (
      <h3
        className="mb-0 font-myriad-pro text-base text-dracula-pink md:text-lg"
        {...props}
      />
    ),
    pre: (props: any) => <pre className="!bg-dracula-darker" {...props} />,
    p: (
      props: JSX.IntrinsicAttributes &
        React.ClassAttributes<HTMLParagraphElement> &
        React.HTMLAttributes<HTMLParagraphElement>
    ) => <p className="text-dracula-light" {...props} />,
    span: (
      props: JSX.IntrinsicAttributes &
        React.ClassAttributes<HTMLSpanElement> &
        React.HTMLAttributes<HTMLSpanElement>
    ) => <span className="text-dracula-light" {...props} />,
    strong: (props: any) => <strong className="text-dracula-cyan" {...props} />,
    ul: (props: any) => <ul className="m-0 ml-5 p-0" {...props} />,
    li: (props: any) => (
      <li
        className="m-0 p-0 text-sm marker:text-dracula-dark-600 ipad:text-base"
        {...props}
      >
        <span className="text-dracula-cyan">{props.children}</span>
      </li>
    ),
  };

  return (
    <article className="rounded-lg px-3.5 pb-[180px] shadow-md md:mx-2.5 md:px-6 md:pb-[80px]">
      <h4 className="mb-1.5 text-lg font-bold text-dracula-pink md:mb-2.5 md:text-xl">
        Project Details
      </h4>
      <div className="mb-2 aspect-video rounded-lg bg-slate-300 md:mb-3.5" />

      <h6 className="mb-2 text-lg text-dracula-green md:text-xl">{name}</h6>

      <div className="md:prose-md resume-md prose prose-invert mb-4 max-w-full text-dracula-light">
        {mdxSource && (
          <MDXRemote {...mdxSource} components={components as any} />
        )}
      </div>

      <div className="mb-5 text-sm text-dracula-light">
        <span className="block pb-1 font-myriad-pro text-base text-dracula-pink md:text-lg">
          Technologies used:
        </span>
        <ul className="list-disc">
          {technologies &&
            technologies.map((tech) => (
              <li
                key={tech}
                className="ml-5 text-sm text-dracula-dark-600 ipad:text-base"
              >
                <span className="text-dracula-cyan">{tech}</span>
              </li>
            ))}
        </ul>
      </div>

      <div>
        {isApp ? (
          <div className="relative aspect-[6/2] max-w-[150px] md:max-w-[200px]">
            <a
              href={url}
              aria-label="Download App"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={AppStoreImage} alt="App Store" fill />
            </a>
          </div>
        ) : (
          <div>
            {isWeb ? (
              <LinkPreview
                image={ogImage}
                description={ogDescription}
                url={url}
                title={ogTitle}
              />
            ) : (
              <div>Other</div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProofModal;
