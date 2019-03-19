import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Number from "./Number";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  addDigit(d) {
    this.setState({ value: this.state.value + "" + d });
  }

  getNumbers() {
    var numbers = [];
    for (var i = 1; i < 10; i++) {
      numbers.push(
        React.cloneElement(<Number value={i} onClick={d => this.addDigit(d)} />)
      );
    }
    numbers.push(React.cloneElement(<Number value={0} />));
    return numbers;
  }

  render() {
    var numbers = this.getNumbers();
    var operators = [];

    return (
      <div className="App">
        <div className="display">{this.state.value}</div>
        <div className="numbers">{numbers}</div>
        <div className="operators">{operators}</div>
      </div>
    );
  }
}

export default App;
