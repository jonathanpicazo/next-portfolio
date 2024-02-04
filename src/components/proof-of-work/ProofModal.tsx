import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TechStackIcon } from '~/components';
import { techStackDictionary } from '~/data';
import { urlFor } from '~/lib/utils';
import type { WorkProject } from '~/lib';

type ProofModalProps = {
  data: WorkProject;
  closeModal: () => void;
};

const ProofModal: React.FC<ProofModalProps> = ({ data, closeModal }) => {
  const {
    name,
    description,
    previewImage,
    url,
    featuredTechnologies,
    technologies,
  } = data;

  const technologiesText = technologies ? technologies.join(', ') : '';

  return (
    <article className="rounded-lg">
      <h4 className="text-dracula-purple text-md md:text-xl">{name}</h4>
      <div className="text-dracula-blue text-sm">
        <span>Technologies: {technologiesText}</span>
      </div>
      <div>
        <span>Demo gifs</span>
      </div>
      <div className="p-4">
        {description && (
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
    </article>
  );
};

export default ProofModal;
