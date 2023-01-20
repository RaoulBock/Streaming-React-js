import React from "react";

export const Button = ({ title, className, icon }) => {
  return (
    <button className={className}>
      {icon}
      {title}
    </button>
  );
};
