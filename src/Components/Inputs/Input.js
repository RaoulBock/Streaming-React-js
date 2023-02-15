import React from "react";

export const Input = ({
  placeholder,
  onChange,
  type,
  className,
  value,
  onClick
}) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      className={className || "default-input"}
      value={value}
      onClick={onClick}
    />
  );
};
