import React from "react";

const Container = props => {
  return (
    <div className="container d-flex justify-content-center flex-wrap align-items-center">
      {props.children}
    </div>
  );
};

export default Container;
