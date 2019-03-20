import React, { Component } from "react";

class Display extends Component {
  render() {
    if (this.props.error) {
      return <div className="display">{this.props.error}</div>;
    } else {
      return (
        <div className="display">
          <div className="v1">{this.props.value2 + this.props.operator}</div>
          <div className="v2">{this.props.value1} </div>
        </div>
      );
    }
  }
}

export default Display;
