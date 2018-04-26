import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="col-2 m-5">
    <div className="img-fluid pointer">
      <img alt={props.name} src={props.image} onClick={() => props.shuffle(props.id)}/>
    </div>
  </div>
);

export default FriendCard;
