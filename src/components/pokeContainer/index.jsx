import React from "react";
import "./style.css";

function PokeContainer(props) {
  return (
    <div className="card" onClick={() => props.click(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default PokeContainer;
