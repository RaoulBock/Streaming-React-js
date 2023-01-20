import React from "react";

export const Card = ({ item, header }) => {
  return (
    <>
      <h2>{header}</h2>
      <div className="card_outline">
        <h4>{item.time_length}</h4>
        <img src={item.img} alt={item.name} className={"card_outline_image"} />
        <h4>{item.title}</h4>
        <h4>{item.views}</h4>
      </div>
    </>
  );
};
