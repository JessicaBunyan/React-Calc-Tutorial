import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div
        className="number button"
        onClick={() => this.props.onClick(this.props.value)}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Button;
