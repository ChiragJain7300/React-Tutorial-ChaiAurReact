import "./App.css";
import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  let [length, setLength] = useState(12);
  let [isNumberAllowed, setNumber] = useState(false);
  let [isCharacterAllowed, setCharacter] = useState(false);
  let [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  useEffect(() => {
    passGenerator();
  }, [length, isNumberAllowed, isCharacterAllowed]);
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "0123456789";
    const char = "!@#$%^&*()-_=+|[]{};:/?";

    if (isCharacterAllowed) str += char;
    if (isNumberAllowed) str += num;

    for (let index = 0; index < length; index++) {
      let randChar = Math.floor(Math.random() * str.length);
      pass += str.charAt(randChar);
    }
    setPassword(pass);
  }, [length, isCharacterAllowed, isNumberAllowed]);
  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select(); 
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div>
        <div className="generatorCont">
          <form>
            <div className="inputRow">
              <input
                type="text"
                value={password}
                id="password"
                ref={passwordRef}
              />
              <button type="button" onClick={copyPassToClipboard}>
                copy
              </button>
            </div>
            <div className="featureRow">
              <input
                type="range"
                id="length"
                min="8"
                max="50"
                value={length}
                readOnly
                onChange={() => {
                  setLength(document.getElementById("length").value);
                }}
              />
              <label htmlFor="length">Length ({length})</label>

              <input
                type="checkbox"
                id="numbers"
                defaultChecked={isNumberAllowed}
                onChange={() => {
                  setNumber((prev) => !prev);
                }}
              />
              <label htmlFor="numbers">Numbers</label>

              <input
                type="checkbox"
                id="characters"
                defaultChecked={isCharacterAllowed}
                onChange={() => {
                  setCharacter((prev) => !prev);
                }}
              />
              <label htmlFor="characters">Characters</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
