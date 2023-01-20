import React from "react";
import { AppContext } from "../../context/AppContext";

export const MenuList = ({ item }) => {
  const { sideTab } = React.useContext(AppContext);
  return (
    <div
      className={sideTab === item.id ? "menulist_active" : "menulist_outline"}
      onClick={item.onClick}
    >
      <h4>{item.icon}</h4>
      <h4>{item.name}</h4>
    </div>
  );
};
