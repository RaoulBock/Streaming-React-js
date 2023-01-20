import React from "react";
import { AppContext } from "../../context/AppContext";
import { APP_ICONS } from "../../context/settings";
import logo from "../../Images/Nuxous-removebg-preview.png";
import { MenuList } from "../List/MenuList";

export const SideNav = () => {
  const { setSideTab } = React.useContext(AppContext);

  const side_menu = [
    {
      id: 0,
      name: "Discover",
      icon: APP_ICONS.SEARCH,
      onClick: () => setSideTab(0),
    },
    {
      id: 1,
      name: "Trending",
      icon: APP_ICONS.BULB,
      onClick: () => setSideTab(1),
    },
    {
      id: 2,
      name: "Following",
      icon: APP_ICONS.STACK,
      onClick: () => setSideTab(2),
    },
  ];

  const side_menu_option_one = [
    {
      id: 3,
      name: "Favorite",
      icon: APP_ICONS.HEART,
      onClick: () => setSideTab(3),
    },
    {
      id: 4,
      name: "My Videos",
      icon: APP_ICONS.STACK,
      onClick: () => setSideTab(4),
    },
    {
      id: 5,
      name: "History",
      icon: APP_ICONS.HISTORY,
      onClick: () => setSideTab(5),
    },
  ];

  return (
    <div className="sidenav_outline">
      <img src={logo} alt={logo} className={"logo"} />

      <div className="side-menu-container">
        {side_menu.map((e, i) => {
          return <MenuList item={e} key={i} />;
        })}
        <h3 className="menu_list_title">Your Videos</h3>
        {side_menu_option_one.map((e, i) => {
          return <MenuList item={e} key={i} />;
        })}
      </div>
    </div>
  );
};
