import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (charAllowed) str += "~`! @#$%^&*()_-+={[}]|:;<,>.?/";
    if (numberAllowed) str += "123456789";
    for (let index = 0; index < length; index++) {
      let rand = Math.floor(Math.random() * str.length);
      pass += str.charAt(rand);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  const passwordRef = useRef(null);
  const copyText = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="mb-5">
        <h1 className="text-6xl text-center font-bold text-lime-700 my-5 uppercase">
          Using Hooks
        </h1>
        <div className="container w-3/4 text-center rounded-lg shadow-2xl mx-auto p-6 bg-slate-900">
          <h1 className="text-5xl uppercase font-bold text-emerald-800 mb-8">
            Password Generator
          </h1>
          <div className="w-full mb-4">
            <input
              type="text"
              placeholder="Password"
              value={password}
              className="w-3/4 p-4 rounded-md text-2xl mb-4 outline-none"
              ref={passwordRef}
              readOnly
            />
            <button
              className="py-4 bg-orange-600 rounded-md text-2xl mb-4 px-8"
              onClick={copyText}
            >
              Copy
            </button>
          </div>
          <div>
            <input
              type="range"
              min="6"
              max="100"
              className="range me-4 accent-orange-600"
              value={length}
              onChange={(e) => setLength(e.currentTarget.value)}
            />
            <span className="text-2xl text-orange-600 font-semibold me-4">
              Length ({length})
            </span>
            <input
              type="checkbox"
              className="me-2 h-4 w-4"
              id="num"
              onChange={(e) => setnumberAllowed(e.currentTarget.checked)}
            />
            <label
              htmlFor="num"
              className="me-4 text-2xl text-orange-600 font-semibold"
            >
              Number
            </label>

            <input
              type="checkbox"
              className="me-2 h-4 w-4"
              id="char"
              onChange={(e) => setCharAllowed(e.currentTarget.checked)}
            />
            <label
              htmlFor="char"
              className="me-4 text-2xl text-orange-600 font-semibold"
            >
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
