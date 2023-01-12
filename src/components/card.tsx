import React from "react";
import { CardType } from "../types/resume";
import Image from "next/image";

const tw = {
  wrapper:
    "rounded-lg p-6 bg-white dark:bg-gray-800 max-w-sm border border-gray-200",
};

const Card = ({ data }: { data: CardType }) => {
  return (
    <>
      <div className={tw.wrapper}>
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
      </div>
    </>
  );
};

export default Card;
