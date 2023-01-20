import React from "react";

export const CurrentSongCard = ({ item }) => {
  return (
    <div className="current_song_card_outline">
      <img
        src={
          "https://abduzeedo.com/sites/default/files/styles/square_1x1/public/originals/0ec5c569226647.5b79b483096c1.jpg"
        }
        alt={"cover"}
        className={"current_song_image"}
      />
      <div>
        <h5>playing</h5>
        <h2>Shawn Mednes - Treats You Better</h2>
        <h4>1,854,691,298 views</h4>
      </div>
    </div>
  );
};
