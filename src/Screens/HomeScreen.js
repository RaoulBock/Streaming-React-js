import React from "react";
import { Card } from "../Components/Cards/Card";
import { VideoCard } from "../Components/Cards/VideoCard";
import { Jumbotron } from "../Components/Jumbotron";
import { Nav } from "../Components/Nav/Nav";
import { DISCOVER } from "../context/settings";
import illustration from "../Images/anshita-nair-0rxLLHD1XxA-unsplash.jpg";

export const HomeScreen = () => {
  return (
    <div className="container">
      <Nav />
      <div className="gradient"></div>
      {/* <img
        src={illustration}
        alt={"illustration"}
        className={"illustration_image"}
      /> */}
      <VideoCard />
      <Jumbotron
        title={"VIDEO OF THE DAY"}
        description={"We Don't Talk Anymore Feat. Selena Gomez"}
        text={
          "Chalie Puth - We Don't Talk Anymore feat. Selena Gomez Official Video"
        }
      />
      <div>
        {DISCOVER.map((e, i) => {
          return <Card key={i} item={e} />;
        })}
      </div>
    </div>
  );
};
