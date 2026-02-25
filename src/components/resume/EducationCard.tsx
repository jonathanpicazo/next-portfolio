import React from 'react';
import { EducationItemType } from '~/lib';
import Image from 'next/image';
import { urlFor } from '~/lib/utils';

type EducationCardProps = {
  data: EducationItemType;
};
const EducationCard: React.FC<EducationCardProps> = ({ data }) => {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <div className="flex items-center">
      <div className="mr-4">
        <Image
          src={urlFor(data.logo).width(500).url()}
          alt="test"
          width={120}
          height={120}
          className="ipad:h-20 ipad:w-20 h-17.5 w-17.5 md:h-20 md:w-20"
        />
      </div>
      <div className="mb-3 flex justify-between">
        <div>
          <h6 className="text-dracula mt-2 text-lg font-semibold">
            {data.name}
          </h6>
          <p className="text-dracula-cyan">{data.degree}</p>
          <p className="text-dracula-orange">{data.location}</p>
          <div className="text-dracula-darker-300 flex items-center gap-1 text-sm">
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
  );
};

export default EducationCard;
