import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Display from "./Display";

var initialState = {
  value1: "",
  value2: "",
  operator: "",
  error: ""
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  addDigit(d) {
    this.setState({ value1: this.state.value1 + "" + d, error: "" });
  }

  delDigit() {
    if (!this.state.value1) {
      return;
    }

    this.setState({
      value1: this.state.value1.substring(0, this.state.value1.length - 1)
    });
  }

  addOperator(o) {
    if (this.state.operator) {
      return;
    }
    this.setState({ operator: o, value2: this.state.value1, value1: "" });
  }

  error(msg) {
    console.log("error set");
    this.setState({ error: msg, operator: "", value1: "", value2: "" });
  }

  equals() {
    if (!this.state.operator || !this.state.value1 || !this.state.value2) {
      return;
    }
    var result;

    switch (this.state.operator) {
      case "+":
        result = parseFloat(this.state.value2) + parseFloat(this.state.value1);
        break;
      case "-":
        result = parseFloat(this.state.value2) - parseFloat(this.state.value1);
        break;
      case "*":
        result = parseFloat(this.state.value2) * parseFloat(this.state.value1);
        break;
      case "/":
        if (this.state.value1 == 0) {
          this.error("Error: divide by zero");
          return;
        }
        result = parseFloat(this.state.value2) / parseFloat(this.state.value1);
        break;
    }

    this.setState({
      operator: "",
      value1: "" + result,
      value2: ""
    });
  }

  render() {
    var numbers = this.renderNumbers();
    var operators = this.renderOperators();
    var calculatorFunctions = this.renderCalcFunctions();

    return (
      <div className="App">
        <Display
          value1={this.state.value1}
          value2={this.state.value2}
          operator={this.state.operator}
          error={this.state.error}
        />
        <div className="buttons">
          <div className="calculator-functions">{calculatorFunctions}</div>
          <div className="numbers">{numbers}</div>
          <div className="operators">{operators}</div>
        </div>
      </div>
    );
  }

  renderNumbers() {
    var numbers = [];
    for (var i = 1; i < 10; i++) {
      numbers.push(<Button value={i} onClick={d => this.addDigit(d)} />);
    }
    numbers.push(<Button value={0} onClick={d => this.addDigit(d)} />);
    return numbers;
  }

  renderOperators() {
    var ops = [];
    ops.push(<Button value={"+"} onClick={() => this.addOperator("+")} />);
    ops.push(<Button value={"-"} onClick={() => this.addOperator("-")} />);
    ops.push(<Button value={"*"} onClick={() => this.addOperator("*")} />);
    ops.push(<Button value={"/"} onClick={() => this.addOperator("/")} />);

    ops.push(<Button value={"="} onClick={() => this.equals()} />);
    return ops;
  }

  renderCalcFunctions() {
    // Backspace and Clear
    var fns = [];
    fns.push(<Button value={"del"} onClick={() => this.delDigit()} />);
    fns.push(
      <Button value={"CE"} onClick={() => this.setState(initialState)} />
    );
    return fns;
  }
}

export default App;
