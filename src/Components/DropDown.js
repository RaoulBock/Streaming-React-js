import React from "react";

export const DropDown = ({ dataset }) => {
  return (
    <div className="drop-down-outline">
      {dataset.map((e, i) => {
        return (
          <h4 onClick={e.onClick} key={i}>
            {e.name}
          </h4>
        );
      })}
    </div>
  );
};
