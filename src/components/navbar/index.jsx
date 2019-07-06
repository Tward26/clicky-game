import React from "react";
import "./style.css";

const Navbar = props => {
  return (
    <nav className="sticky-top">
      <ul>
        <li>Bug-Type Pokemon Memory Game</li>
        <li>{props.guess}</li>
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
