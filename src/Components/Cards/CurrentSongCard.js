import React from "react";
import { AppContext } from "../../context/AppContext";
import { APP_ICONS } from "../../context/settings";

export const CurrentSongCard = () => {
  const { currentSongPlaying: item } = React.useContext(AppContext);
  return (
    <div className="current_song_card_outline">
      <div>
        <img src={item.img} alt={"cover"} className={"current_song_image"} />
        <h4 className="current_song_card_icon">{APP_ICONS.PLAY}</h4>
      </div>
      <div>
        <div className="current_song_card_grid">
          {/* <h5>playing</h5> */}
          <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <h2>{item.title}</h2>
        <h4>{item.views}</h4>
      </div>
    </div>
  );
};
