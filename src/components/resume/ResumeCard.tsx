import React from "react";
import { ResumeCardType } from "../../lib/types/resume";
import Image from "next/image";

export const ResumeCard = ({ data }: { data: ResumeCardType }) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="mb-3 flex justify-between">
        <div>
          <time className="mb-1 rounded-lg bg-dracula-yellow px-3 py-2 text-sm font-normal leading-none text-dracula-dark">
            {data.timespan[0]} - {data.timespan[1]}
          </time>
          <h6 className="mt-2 text-lg font-semibold text-dracula">
            {data.location}
          </h6>
          <p className="text-dracula-cyan">{data.title}</p>
          <p className="text-dracula-orange">{data.address}</p>
        </div>
        <div>
          <Image
            src={`/images/resume/${data.image}.png`}
            alt="test"
            width={90}
            height={90}
            className="w-[70px] md:w-[90px]"
          />
        </div>
      </div>

      {data.details && (
        <ul className="ml-3 list-disc">
          {data.details.map((note, index) => (
            <li key={`${data.title}-note-${index}`}>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
