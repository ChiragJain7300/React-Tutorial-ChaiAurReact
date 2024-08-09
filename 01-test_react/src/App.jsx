import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const incCount = () => {
    count++;
    setCount(count);
  };
  const changeBgColor = () => {
    document.querySelector("body").style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
  };

  return (
    <>
      <div className="main">
        <h1>React Demo Test</h1>
        <button className="btn" onClick={incCount}>
          Count {count}
        </button>
        <button className="btn" onClick={changeBgColor}>
          Change Background Color
        </button>
      </div>
    </>
  );
}

export default App;
