import React, { Component } from "react";

export class Counter extends Component {
  state = { id: this.props.id, value: this.props.value };

  handleIncrement = () => {
    // cannot mutate state directly, so create a new variable
    const newValue = this.state.value + 1;
    this.setState({ value: newValue });
  };

  handleDecrement = () => {
    // cannot mutate state directly, so create a new variable
    const newValue = this.state.value - 1;
    this.setState({ value: newValue });
  };

  evaluateClass = () => {
    return this.state.value <= 0 ? "warning" : "light";
  };

  render() {
    return (
      <div className="badge badge-light">
        <button
          onClick={this.handleIncrement}
          className="btn btn-sm btn-primary"
        >
          {" "}
          +{" "}
        </button>
        <h2>
          <span className={`badge badge-${this.evaluateClass()}`}>
            {this.state.value}
          </span>
        </h2>

        <button
          onClick={this.handleDecrement}
          className="btn btn-sm btn-primary"
        >
          {"  "}-{"  "}
        </button>
      </div>
    );
  }
}

export default Counter;
