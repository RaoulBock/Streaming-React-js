import React from "react";
import pause from "../../Images/pause.svg";
import play from "../../Images/play.svg";
import forward from "../../Images/forward-5.svg";
import videoPlayMe from "../Video/Do_Better_(getmp3.pro).mp3";
import { APP_ICONS } from "../../context/settings";

export const VideoCard = () => {
  // const videoRef = React.useRef(null);
  // const [playing, setPlaying] = React.useState(false);
  // const [currentTime, setCurrentTime] = React.useState(0);
  // const [videoTime, setVideoTime] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [videoTime, setVideoTime] = React.useState(0);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      setVideoTime(videoRef.current.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  // const videoHandler = (control) => {
  //   if (control === "play") {
  //     videoRef.current.play();
  //     setPlaying(true);
  //     var vid = document.getElementById("video1");
  //     setVideoTime(vid.duration);
  //   } else if (control === "pause") {
  //     videoRef.current.pause();
  //     setPlaying(false);
  //   }
  // };

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  // window.setInterval(function () {
  //   setCurrentTime(videoRef.current?.currentTime);
  //   setProgress((videoRef.current?.currentTime / videoTime) * 100);
  // }, 1000);

  return (
    <div className="video_card_container">
      <audio ref={videoRef} id="video1" className="video_player_container">
        {/* Add your video source here */}
        <source src={videoPlayMe} type={"audio/mp3"} />
      </audio>
      {/* <button onClick={() => videoHandler("play")}>Play</button> */}
      {playing ? (
        <div onClick={() => videoHandler("pause")}>
          {/* <img src={pause} alt={"plat_btn"} className={"play_btn"} /> */}
          <h4 className={"play_btn"}>{APP_ICONS.PAUSE}</h4>
        </div>
      ) : (
        <div onClick={() => videoHandler("play")}>
          {/* <img src={play} alt={"plat_btn"} className={"play_btn"} /> */}
          <h4 className={"play_btn"}>{APP_ICONS.PLAY}</h4>
        </div>
      )}
      {/* <button onClick={() => videoHandler("pause")}>Pause</button> */}
      {/* <p>{`Playing: ${playing}`}</p>
      <p>{`Video time: ${videoTime}`}</p> */}
    </div>
  );
};
