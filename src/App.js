import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Display from "./Display";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      value2: "",
      operator: "",
      error: ""
    };
  }

  addDigit(d) {
    this.setState({ value1: this.state.value1 + "" + d, error: "" });
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
    numbers.push(
      React.cloneElement(<Button value={0} onClick={d => this.addDigit(d)} />)
    );
    return numbers;
  }

  getOperators() {
    var ops = [];
    ops.push(<Button value={"+"} onClick={() => this.addOperator("+")} />);
    ops.push(<Button value={"-"} onClick={() => this.addOperator("-")} />);
    ops.push(<Button value={"*"} onClick={() => this.addOperator("*")} />);
    ops.push(<Button value={"/"} onClick={() => this.addOperator("/")} />);

    ops.push(<Button value={"="} onClick={() => this.equals()} />);
    return ops;
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
      value1: result,
      value2: ""
    });
  }

  render() {
    var numbers = this.getNumbers();
    var operators = this.getOperators();

    return (
      <div className="App">
        <Display
          value1={this.state.value1}
          value2={this.state.value2}
          operator={this.state.operator}
          error={this.state.error}
        />
        <div className="buttons">
          <div className="numbers">{numbers}</div>
          <div className="operators">{operators}</div>
        </div>
      </div>
    );
  }
}

export default App;
