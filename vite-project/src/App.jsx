import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const randomNum = () => {
    setCount(Math.floor(Math.random() * 1000));
  };
  return (
    <>
      <h2>{count}</h2>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
      <button onClick={randomNum}>Random</button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
}

export default App;
