import React from "react";

export function Counter(props) {
  const { value, id, handleDecrement, handleDelete, handleIncrement } = props;
  const evaluateClass = () => {
    return value <= 0 ? "warning" : "light";
  };

  return (
    <div className="badge badge-light">
      <button
        onClick={() => handleIncrement(id)}
        className="btn btn-sm btn-primary"
      >
        {" "}
        +{" "}
      </button>
      <h2>
        <span className={`badge badge-${evaluateClass()}`}>{value}</span>
      </h2>

      <button
        onClick={() => handleDecrement(id)}
        className="btn btn-sm btn-primary"
      >
        {"  "}-{"  "}
      </button>
      <br />
      <button
        onClick={() => handleDelete(id)}
        className="btn btn-sm btn-danger mt-3"
      >
        {"  "}Delete{"  "}
      </button>
    </div>
  );
}

export default Counter;
