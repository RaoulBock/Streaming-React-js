import React from "react";
import { AppContext } from "../../context/AppContext";

export const CurrentSongCard = () => {
  const { currentSongPlaying: item } = React.useContext(AppContext);
  return (
    <div className="current_song_card_outline">
      <img src={item.img} alt={"cover"} className={"current_song_image"} />
      <div>
        <h5>playing</h5>
        <h2>{item.title}</h2>
        <h4>{item.views}</h4>
      </div>
    </div>
  );
};
