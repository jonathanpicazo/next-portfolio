import React from "react";
import { EducationItemType } from "~/lib";
import Image from "next/image";
import { urlFor } from "~/lib/utils";

export const EducationCard = ({ data }: { data: EducationItemType }) => {
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
  });
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <Image
          src={urlFor(data.logo).width(500).url()}
          alt="test"
          width={120}
          height={120}
          className="h-[70px] w-[70px] md:h-[80px] md:w-[80px]"
        />
      </div>
      <div className="mb-3 flex justify-between">
        <div>
          <h6 className="mt-2 text-lg font-semibold text-dracula">
            {data.name}
          </h6>
          <p className="text-dracula-cyan">{data.degree}</p>
          <p className="text-dracula-orange">{data.location}</p>
          <div className="flex items-center gap-1 text-sm text-dracula-darker-300">
            <time>{dateFormatter.format(new Date(data.startingDate))}</time>
            <span>-</span>
            <>
              {data.endingDate ? (
                <time>{dateFormatter.format(new Date(data.endingDate))}</time>
              ) : (
                <span>Present</span>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
