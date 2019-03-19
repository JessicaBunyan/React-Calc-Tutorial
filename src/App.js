import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Number from "./Number";

class App extends Component {
  render() {
    var numbers = [];

    for (var i = 1; i < 10; i++) {
      numbers.push(React.cloneElement(<Number value={i} />));
    }
    numbers.push(React.cloneElement(<Number value={0} />));

    return (
      <div className="App">
        <div className="screen" />
        <div className="buttons">{numbers}</div>
      </div>
    );
  }
}

export default App;
