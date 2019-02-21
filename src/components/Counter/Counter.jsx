import React from "react";

export function Counter(props) {
  const evaluateClass = () => {
    return props.value <= 0 ? "warning" : "light";
  };

  return (
    <div className="badge badge-light">
      <button
        onClick={() => props.handleIncrement(props.id)}
        className="btn btn-sm btn-primary"
      >
        {" "}
        +{" "}
      </button>
      <h2>
        <span className={`badge badge-${evaluateClass()}`}>{props.value}</span>
      </h2>

      <button
        onClick={() => props.handleDecrement(props.id)}
        className="btn btn-sm btn-primary"
      >
        {"  "}-{"  "}
      </button>
      <br />
      <button
        onClick={() => props.handleDelete(props.id)}
        className="btn btn-sm btn-danger mt-3"
      >
        {"  "}Delete{"  "}
      </button>
    </div>
  );
}

export default Counter;
