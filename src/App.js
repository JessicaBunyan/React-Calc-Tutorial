import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import Button from "./Number";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      value2: "",
      operator: ""
    };
  }

  addDigit(d) {
    this.setState({ value1: this.state.value1 + "" + d });
  }

  addOperator(o) {
    if (this.state.operator) {
      return;
    }
    this.setState({ operator: o, value2: this.state.value1, value1: "" });
  }

  getNumbers() {
    var numbers = [];
    for (var i = 1; i < 10; i++) {
      numbers.push(<Button value={i} onClick={d => this.addDigit(d)} />);
    }
    numbers.push(React.cloneElement(<Button value={0} />));
    return numbers;
  }

  getOperators() {
    var ops = [];
    ops.push(<Button value={"+"} onClick={() => this.addOperator("+")} />);
    ops.push(<Button value={"="} onClick={() => this.equals()} />);
    return ops;
  }

  equals() {
    this.setState({
      operator: "",
      value1: "",
      value2: parseInt(this.state.value1) + parseInt(this.state.value2)
    });
  }

  render() {
    var numbers = this.getNumbers();
    var operators = this.getOperators();

    return (
      <div className="App">
        <div className="display">
          <div className="v1">{this.state.value2 + this.state.operator}</div>
          <div className="v2">{this.state.value1} </div>
        </div>
        <div className="numbers">{numbers}</div>
        <div className="operators">{operators}</div>
      </div>
    );
  }
}

export default App;
