import React from "react";
import { APP_ICONS } from "../../context/settings";

export const SocialButtonCard = ({ icon, count }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isLikedCount, setIsLikedCount] = React.useState(0);

  const likeSong = () => {
    if (isLikedCount < 0) {
      setIsLikedCount(0);
    }
  };

  return (
    <div className="social_button_card_outline">
      <h4>{icon}</h4>
      <h4>{isLikedCount}</h4>
    </div>
  );
};
