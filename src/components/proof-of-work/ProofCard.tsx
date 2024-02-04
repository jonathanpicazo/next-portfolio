import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TechStackIcon } from '~/components';
import { techStackDictionary } from '~/data';
import { motion } from 'framer-motion';
import { urlFor } from '~/lib/utils';
import type { WorkProject } from '~/lib';

type ProofCardProps = {
  data: WorkProject;
  openModal: (_setter: WorkProject) => void;
};

const ProofCard: React.FC<ProofCardProps> = ({ data, openModal }) => {
  const { name, description, previewImage, featuredTechnologies, context } =
    data;

  return (
    <motion.article
      className="border-dracula-dark cursor-pointer overflow-hidden rounded-lg border shadow-xl"
      whileHover={{
        scale: 1.035,
        transition: { duration: 0.2 },
      }}
      onClick={() => openModal(data)}
    >
      <div className="relative aspect-[5/3]">
        <Image
          alt="Project 1"
          className="object-cover object-top"
          fill
          src={urlFor(previewImage).width(1000).url()}
        />
      </div>
      <div className="p-4">
        <h3 className="text-dracula-purple text-md md:text-xl">{name}</h3>
        <p className="text-dracula-cyan mb-1 text-sm">
          <span>Context: </span>
          <span>{context}</span>
        </p>
        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400 md:mb-4">
          A brief description of the project goes here.
        </p>
        <div className="flex justify-center">
          {featuredTechnologies.map((key) => {
            if (techStackDictionary[key]) {
              const item = techStackDictionary[key];
              return (
                <TechStackIcon
                  item={item}
                  key={`${name}-tech-stack-icon-${item.label}`}
                />
              );
            }
          })}
        </div>
      </div>
    </motion.article>
  );
};

export default ProofCard;
