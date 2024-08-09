import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full relative">
        <h1 className="bg-red-500 font-semibold text-slate-200 text-3xl mb-5 p-3 rounded-md w-50">
          Hello world!
        </h1>
        <div className="absolute text-blue-800 -right-4 -top-4 bg-white text-xl font-bold rounded-full w-10 h-10 text-center pt-1.5">
          {count}
        </div>
      </div>
      <div className="card p-2">
        <button
          className="text-2xl uppercase"
          onClick={() => setCount((count) => count + 1)}
        >
          Increase
        </button>
      </div>
      <div className="card p-2  mb-5">
        <button
          className="text-2xl uppercase"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
