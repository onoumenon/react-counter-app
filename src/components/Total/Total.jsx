import React from "react";

export default function Total(props) {
  return (
    <React.Fragment>
      <h4>Total Number of Counters: {props.numCounters}</h4>
      <h4>Total Number: {props.totalCount}</h4>
    </React.Fragment>
  );
}
