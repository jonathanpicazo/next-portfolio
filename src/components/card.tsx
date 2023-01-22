import React from "react";
import { CardType } from "../types/resume";
import Image from "next/image";

const Card = ({ data }: { data: CardType }) => {
  return (
    <>
      {/* <div className="rounded-lg p-6 bg-dracula-darker max-w-sm border border-dracula-cyan">
        <div className="flex">
          <Image
            src={`/images/resume/${data.image}.png`}
            alt="test"
            width={20}
            height={20}
          />
          <p>{data.location}</p>
        </div>
        <p>{data.title}</p>
        <p>{data.address}</p>
        <p>
          {data.timespan[0]} - {data.timespan[1]}
        </p>
        {data.details && (
          <>
            <p>{data.details}</p>
          </>
        )}
        <p></p>
      </div> */}
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <div className="flex justify-between">
          <div>
            <time className="mb-1 text-sm font-normal leading-none bg-[#f1fa8c] text-dracula-dark py-2 px-3 rounded-lg">
              {data.timespan[0]} - {data.timespan[1]}
            </time>
            <h3 className="text-lg font-semibold  mt-2 text-dracula">
              {data.location}
            </h3>
            <p className="text-dracula-cyan">{data.title}</p>
            <p className="text-dracula-orange">{data.address}</p>
          </div>
          <div>
            <Image
              src={`/images/resume/${data.image}.png`}
              alt="test"
              width={50}
              height={50}
            />
          </div>
        </div>

        {data.details && (
          <ul className="list-disc ml-3">
            {data.details.map((note, index) => (
              <li key={`${data.title}-note-${index}`}>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default Card;
