import React from "react";
import { AppContext } from "../../context/AppContext";
import { APP_ICONS } from "../../context/settings";

export const Card = ({ item, header }) => {
  const { currentSongPlaying, setCurrentSongPlaying } =
    React.useContext(AppContext);
  return (
    <>
      <div className="card_outline" onClick={() => setCurrentSongPlaying(item)}>
        <h4 className="card_time_length">{item.time_length}</h4>
        <img src={item.img} alt={item.name} className={"card_outline_image"} />
        {currentSongPlaying === item ? (
          <h5 className="is_playing_icon">{APP_ICONS.PAUSE}</h5>
        ) : (
          <h5 className="is_playing_icon">{APP_ICONS.PLAY}</h5>
        )}
        <h4>{item.title}</h4>
        <h4 className="card_views">{item.views} views</h4>
      </div>
    </>
  );
};
