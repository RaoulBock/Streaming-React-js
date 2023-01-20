import React from "react";

export const UserCard = ({ src, username, date_uploaded }) => {
  return (
    <div className="user_card_outline">
      <img src={src} alt={"img"} className={"user_card_image"} />
      <div>
        <h4>{username}</h4>
        <h5>{date_uploaded}</h5>
      </div>
    </div>
  );
};
