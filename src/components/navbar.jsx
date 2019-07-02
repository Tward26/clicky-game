import React from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Clicky Game
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">{props.guess}</li>
        <li className="nav-item">
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
