import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCounter] = useState(0);
  const reset = () => {
    setCounter(0);
  };
  const incCount = () => {
    count += 1;
    setCounter(count);
    console.log(count);
  };
  const decCount = () => {
    count -= 1;
    setCounter(count);
    console.log(count);
  };
  return (
    <>
      <h1>Counter Using React</h1>
      <p>{count}</p>
      <button onClick={incCount}>Increase</button>
      <button onClick={decCount}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
