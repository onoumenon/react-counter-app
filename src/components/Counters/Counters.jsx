import React, { Component } from "react";
import { Counter } from "../Counter/Counter";

export class Counters extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.length === 0 && <p>No more counters!</p>}
        {data.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            handleDelete={this.props.handleDelete}
            handleIncrement={this.props.handleIncrement}
            handleDecrement={this.props.handleDecrement}
          />
        ))}
        <button
          onClick={() => this.props.handleReset()}
          className="btn btn-sm btn-info mt-3"
        >
          {"  "}Reset{"  "}
        </button>
      </div>
    );
  }
}

export default Counters;
