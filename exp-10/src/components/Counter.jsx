import React, { useState } from "react";

const Counter = () => {
  const initialCount = 10;
  const [counter, setCounter] = useState(initialCount);
  const [step, setStep] = useState(5);

  const inc = () => {
    setCounter(counter + step);
  };
  const dec = () => {
    setCounter(counter - step);
  };
  const reset = () => {
    setCounter(initialCount);
  };
  return (
    <div
      className="main"
      style={{ display: "flex", justifyContent: "center", margin: "60px" }}
    >
      <div
        className="counter1"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "solid 2px black",
          width: "300px",
          paddingBottom: "25px",
          borderRadius: "10px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <p>Count : </p>
          <p style={{ fontSize: "28px" }}>{counter}</p>
        </span>
        <p>
          Step :{" "}
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value) || 1)}
            style={{ width: "60px", border: "1px solid", borderRadius: "4px" }}
          />
        </p>
        <div className="buttons" style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={inc}
            style={{ backgroundColor: "#0bd70b", borderRadius: "5px" }}
          >
            Increment
          </button>
          <button
            onClick={dec}
            style={{ backgroundColor: "#ff2a2a", borderRadius: "5px" }}
          >
            Decrement
          </button>
          <button
            onClick={reset}
            style={{ backgroundColor: "#b2b2b2", borderRadius: "5px" }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
