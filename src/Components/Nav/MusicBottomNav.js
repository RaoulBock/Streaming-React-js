import React from "react";
import { APP_ICONS } from "../../context/settings";

export const MusicBottomNav = () => {
  const [progress, setProgress] = React.useState(10);
  return (
    <div className="music_bottom_nav_container">
      <h4>{APP_ICONS.PLAY}</h4>
      <div style={{ width: `${progress}%` }} className="progress-nav-bar"></div>
    </div>
  );
};
