import React from 'react';
import Image from 'next/image';
import { TechStackIcon } from '~/components/sections';
import { techStackDictionary } from '~/data';
import { useMobile } from '~/hooks';
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
  const isMobile = useMobile();
  return (
    <motion.article
      className="cursor-pointer overflow-hidden rounded-lg border border-dracula-dark shadow-xl"
      whileHover={
        !isMobile
          ? {
              scale: 1.035,
              transition: { duration: 0.2 },
            }
          : undefined
      }
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
        <h3 className="text-md text-dracula-purple md:text-xl">{name}</h3>
        <p className="mb-1 text-sm text-dracula-cyan">
          <span>Context: </span>
          <span>{context}</span>
        </p>
        {description && (
          <p className="mb-3 text-sm text-dracula-blue-300 md:mb-4">
            {description}
          </p>
        )}

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
            return null;
          })}
        </div>
      </div>
    </motion.article>
  );
};

export default ProofCard;
