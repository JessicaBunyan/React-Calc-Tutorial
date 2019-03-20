import React, { Component } from "react";

const Button = props => {
  return (
    <div className="number button" onClick={() => props.onClick(props.value)}>
      {props.value}
    </div>
  );
};

export default Button;
