import React, { Component } from "react";
import { Counters } from "./components/Counters/Counters";
import { counters } from "./sampleData";
import Total from "./components/Total/Total";

export class App extends Component {
  state = {
    data: counters
  };

  settingState = (counterId, operator) => {
    const copy = [...this.state.data];
    copy.find(element => element.id === counterId).value += operator;
    this.setState({ data: copy });
  };

  handleIncrement = counterId => {
    this.settingState(counterId, 1);
  };

  handleDecrement = counterId => {
    this.settingState(counterId, -1);
  };

  handleDelete = counterId => {
    const filteredData = this.state.data.filter(
      counter => counter.id !== counterId
    );
    this.setState({ data: filteredData });
  };
  // For reset all
  //   handleReset = () => {
  //     this.setState({ data: counters });
  //   };

  handleReset = () => {
    const copy = [...this.state.data];
    console.log(copy);
    const updated = copy.map(counter => {
      counter.value = 0;
      return counter;
    });
    console.log(updated);
    this.setState({ data: updated });
  };

  render() {
    const data = this.state.data;
    const numCounters = data.length;
    const totalCount = data.reduce((acc, element) => {
      return acc + element.value;
    }, 0);

    return (
      <React.Fragment>
        <h1>Counter Lab</h1>
        <Total numCounters={numCounters} totalCount={totalCount} />
        <Counters
          data={this.state.data}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
          handleDelete={this.handleDelete}
          handleReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
