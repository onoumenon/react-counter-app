import React, { Component } from "react";

export class Counter extends Component {
  state = { id: 1, value: 0 };

  handleIncrement = () => {
    // cannot mutate state directly, so create a new variable
    const newValue = this.state.value + 1;
    this.setState({ value: newValue });
  };
  handleDecrement = () => {
    if (this.state.value === 0) {
      return;
    } else {
      // cannot mutate state directly, so create a new variable
      const newValue = this.state.value - 1;
      this.setState({ value: newValue });
    }
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleDecrement} className="btn btn-primary">
          {" "}
          -{" "}
        </button>
        <h2>
          <span className="badge badge-secondary">{this.state.value}</span>
        </h2>
        <button onClick={this.handleIncrement} className="btn btn-primary">
          {" "}
          +{" "}
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
