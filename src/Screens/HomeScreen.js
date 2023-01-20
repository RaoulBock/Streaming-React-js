import React from "react";
import { Card } from "../Components/Cards/Card";
import { VideoCard } from "../Components/Cards/VideoCard";
import { Jumbotron } from "../Components/Jumbotron";
import { Nav } from "../Components/Nav/Nav";
import { APP_ICONS, DISCOVER, TRENDING } from "../context/settings";
import illustration from "../Images/anshita-nair-0rxLLHD1XxA-unsplash.jpg";

export const HomeScreen = () => {
  return (
    <div className="container">
      <Nav />
      <div className="container_header">
        <div className="gradient"></div>
        <VideoCard />
        <Jumbotron
          title={"VIDEO OF THE DAY"}
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
    </div>
  );
};
