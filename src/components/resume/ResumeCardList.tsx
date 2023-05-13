import React from "react";

import { ResumeCard, PageCard } from "~/components";
import { ResumeCardType } from "~/types/resume";

export const ResumeCardList = ({
  header,
  list,
}: {
  header: string;
  list: any;
}) => {
  return (
    <PageCard>
      <h3 className="text-xl mb-3">{header}</h3>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {list.map((el: ResumeCardType, index: number) => (
          <ResumeCard key={`card-item-${index}`} data={el} />
        ))}
      </ol>
    </PageCard>
  );
};
