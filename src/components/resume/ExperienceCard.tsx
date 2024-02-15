import React from 'react';
import { ExperienceItemType } from '~/lib';
import Image from 'next/image';
import { urlFor } from '~/lib/utils';
import { MDXRemote } from 'next-mdx-remote';

type ExperienceCardProps = {
  data: ExperienceItemType;
};
const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
  });
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <Image
              src={urlFor(data.logo).width(500).url()}
              alt="test"
              width={120}
              height={120}
              className="h-[80px] w-[80px] ipad:h-[90px] ipad:w-[90px] md:h-[120px] md:w-[120px]"
            />
          </div>
          <div>
            <h6 className="mt-2 text-lg font-semibold text-dracula">
              {data.name}
            </h6>
            <p className="text-dracula-cyan">{data.title}</p>
            <p className="text-dracula-orange">{data.location}</p>
            <div className="flex items-center gap-1 text-sm text-dracula-darker-300">
              <time>{dateFormatter.format(new Date(data.startingDate))}</time>
              <span>-</span>
              {data.endingDate ? (
                <time>{dateFormatter.format(new Date(data.endingDate))}</time>
              ) : (
                <span>Present</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="md:prose-md resume-md prose prose-invert max-w-full text-dracula-light">
        <MDXRemote {...data.content} />
      </div>
    </div>
  );
};

export default ExperienceCard;
