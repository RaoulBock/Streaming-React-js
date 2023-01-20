import React from "react";
import { Card } from "../Components/Cards/Card";
import { CurrentSongCard } from "../Components/Cards/CurrentSongCard";
import { VideoCard } from "../Components/Cards/VideoCard";
import { Jumbotron } from "../Components/Jumbotron";
import { MusicBottomNav } from "../Components/Nav/MusicBottomNav";
import { Nav } from "../Components/Nav/Nav";
import { AppContext } from "../context/AppContext";
import { APP_ICONS, DISCOVER, TRENDING } from "../context/settings";
import illustration from "../Images/anshita-nair-0rxLLHD1XxA-unsplash.jpg";

export const HomeScreen = () => {
  const { currentSongPlaying } = React.useContext(AppContext);
  return (
    <div className="container">
      <Nav />
      {currentSongPlaying && <CurrentSongCard />}
      <div className="container_header">
        <div className="gradient"></div>
        <img
          src={illustration}
          alt={"illustration"}
          className={"illustration_image"}
        />
        <VideoCard />
        <Jumbotron
          title={"SONG OF THE DAY"}
          description={"We Don't Talk Anymore Feat. Selena Gomez"}
          text={
            "Chalie Puth - We Don't Talk Anymore feat. Selena Gomez Official Video"
          }
        />
      </div>
      <div className="section_one">
        <div className="section_one_information">
          <h2 className="card_header">{"Discover"}</h2>

          <div className="section_one_grid">
            {DISCOVER.map((e, i) => {
              return <Card key={i} item={e} header={"Discover"} />;
            })}
          </div>
        </div>
        <div className="section_one_information">
          <h2 className="card_header">{"Trending"}</h2>
          <div className="section_one_grid">
            {TRENDING.map((e, i) => {
              return <Card key={i} item={e} header={"Discover"} />;
            })}
          </div>
        </div>
      </div>

      {/* <MusicBottomNav /> */}
    </div>
  );
};
