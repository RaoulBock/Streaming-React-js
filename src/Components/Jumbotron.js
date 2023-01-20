import React from "react";
import { APP_ICONS } from "../context/settings";
import { SocialButtonCard } from "./Cards/SocialButtonCard";
import { UserCard } from "./Cards/UserCard";

export const Jumbotron = ({ title, description, text }) => {
  const default_image =
    "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg";
  return (
    <div className="jumbotron_container">
      <h4>{title}</h4>
      <h1>{description}</h1>
      <h5>{text}</h5>

      <div className="user_card_outline">
        <UserCard
          src={default_image}
          username={"Raoul Bock"}
          date_uploaded={"12th, July 22"}
        />
      </div>

      <div className="social_button_card">
        <SocialButtonCard icon={APP_ICONS.HEART} count={"564"} />
        <SocialButtonCard icon={APP_ICONS.SHARE} count={"657"} />
        <SocialButtonCard icon={APP_ICONS.EYE} count={"1764"} />
      </div>
    </div>
  );
};
