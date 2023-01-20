import React from "react";
import { AppContext } from "../../context/AppContext";

export const CurrentSongCard = () => {
  const { currentSongPlaying: item } = React.useContext(AppContext);
  return (
    <div className="current_song_card_outline">
      <img src={item.img} alt={"cover"} className={"current_song_image"} />
      <div>
        <div className="current_song_card_grid">
          <h5>playing</h5>
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
