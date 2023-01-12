import React from "react";
import { CardType } from "types/resume";
const tw = {};
import Card from "./card";
const CardList = ({ header, list }: { header: string; list: any }) => {
  return (
    <>
      <section>
        <h3>{header}</h3>
        {list.map((el: CardType, index: number) => (
          <Card key={`card-item-${index}`} data={el} />
        ))}
      </section>
    </>
  );
};

export default CardList;
