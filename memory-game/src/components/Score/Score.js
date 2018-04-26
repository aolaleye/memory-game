import React from "react";
import "./Score.css";

const Score = props => (
  <nav>
    <div className="nav-wrapper">
      <ul id="nav-mobile">
        <li className="score">Score: {props.score}</li>
      </ul>
    </div>
  </nav>
);

export default Score;