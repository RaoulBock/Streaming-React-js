import React from "react";
import { APP_ICONS } from "../../context/settings";
import { Button } from "../Buttons/Button";
import { SearchInput } from "../Inputs/SearchInput";

export const Nav = () => {
  const default_image =
    "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg";

  return (
    <div className="nav_container">
      <SearchInput placeholder={"Search here ..."} />

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
