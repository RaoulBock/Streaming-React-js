import React from "react";

export const Card = ({ item, header }) => {
  return (
    <>
      <div className="card_outline">
        <h4 className="card_time_length">{item.time_length}</h4>
        <img src={item.img} alt={item.name} className={"card_outline_image"} />
        <h4>{item.title}</h4>
        <h4 className="card_views">{item.views} views</h4>
      </div>
    </>
  );
};
