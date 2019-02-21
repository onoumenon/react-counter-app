import React, { Component } from "react";
import { counters } from "../../sampleData";
import { Counter } from "../Counter/Counter";

export class Counters extends Component {
  state = {
    data: counters
  };

  handleDelete = counterId => {
    const filteredData = this.state.data.filter(
      counter => counter.id !== counterId
    );
    this.setState({ data: filteredData });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        {data.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            handleDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
