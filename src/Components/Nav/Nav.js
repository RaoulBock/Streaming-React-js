import React from "react";
import { AppContext } from "../../context/AppContext";
import { APP_ICONS } from "../../context/settings";
import { Button } from "../Buttons/Button";
import { SearchInput } from "../Inputs/SearchInput";

export const Nav = () => {
  const default_image =
    "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg";
  const { showMenu, setShowMenu } = React.useContext(AppContext);

  return (
    <div className="nav_container">
      <div className="nav_grid">
        <h4 className="nav_menu" onClick={() => setShowMenu(!showMenu)}>
          {APP_ICONS.MENU}
        </h4>
        <SearchInput placeholder={"Search here ..."} />
      </div>

      <div className="nav_container_grid">
        <Button
          title={"Upload"}
          className={"btn btn-outline"}
          icon={APP_ICONS.VIDEO}
        />
        <h4>{APP_ICONS.NOTIFICATION}</h4>
        <img
          src={default_image}
          alt={"profile_picture"}
          className={"profile_picture_image"}
        />
      </div>
    </div>
  );
};
