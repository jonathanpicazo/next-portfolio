import React from "react";
import { CardType } from "types/resume";
import Card from "./card";
const CardList = ({ header, list }: { header: string; list: any }) => {
  return (
    <>
      <section className="flex-1 md:mx-6 mx-3 rounded-lg bg-dracula-darker-900 px-9 py-4">
        <h3 className="text-xl mb-3">{header}</h3>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {list.map((el: CardType, index: number) => (
            <Card key={`card-item-${index}`} data={el} />
          ))}
        </ol>
      </section>
    </>
  );
};

export default CardList;
