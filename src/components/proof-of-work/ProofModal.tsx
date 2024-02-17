import React from 'react';
import Image from 'next/image';
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
        className="text-dracula-orange hover:text-dracula-orange-700 active:text-dracula-orange-700"
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
  closeModal: () => void;
};

const ProofModal: React.FC<ProofModalProps> = ({ data, closeModal }) => {
  const {
    name,
    description,
    technologies,
    projectType,
    url,
    ogTitle,
    ogImage,
    ogDescription,
  } = data;
  const isApp = projectType === 'app';
  const isWeb = projectType === 'web';
  // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
  const _breadMan = () => closeModal();

  return (
    <article className="rounded-lg px-3.5 pb-[180px] shadow-md md:mx-2.5 md:px-6 md:pb-[80px]">
      <h4 className="mb-1.5 text-lg font-bold text-dracula-pink md:mb-2.5 md:text-xl">
        Project Details
      </h4>
      <div className="mb-2 aspect-video rounded-lg bg-slate-300 md:mb-3.5" />

      <h6 className="text-lg text-dracula-green md:text-xl">{name}</h6>
      <div className="p-4">
        {description && (
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
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
