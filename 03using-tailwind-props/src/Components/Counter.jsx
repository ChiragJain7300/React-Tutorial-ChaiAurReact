// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="mb-4 p-3 bg-gray-700 rounded-md w-1/2 m-auto">
        <h1 className="text-5xl text-red-700 font-bold mb-3">{count}</h1>
        <button onClick={increaseCount} className="me-3">
          Increase Count
        </button>
        <button onClick={decreaseCount}>Decrease Count</button>
      </div>
    </>
  );
};

export default Counter;
