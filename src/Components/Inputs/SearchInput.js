import React from "react";
import { APP_ICONS } from "../../context/settings";

export const SearchInput = ({ placeholder, onChange, value }) => {
  return (
    <div className="search_input_container">
      <h4>{APP_ICONS.SEARCH}</h4>
      <input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={"search-input"}
      />
    </div>
  );
};
