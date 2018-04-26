import React from "react";
import "./Score.css";

const Score = props => (
  <nav>
    <div className="nav-wrapper">
      <ul className="text-center p-0">
        <li className="score mx-3">Current Score: {props.score}</li>
        <li className="score mx-3">Best Score: {props.bestScore}</li>
      </ul>
    </div>
  </nav>
);

export default Score;