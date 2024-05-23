import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Cards = () => {
  return (
    <div className="flex gap-3 h-80  ">
      <Card1 />
      <Card2 />
    </div>
  );
};

export default Cards;
