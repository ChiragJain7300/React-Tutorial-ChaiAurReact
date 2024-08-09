import React from "react";

function Options({ opts, setAnswer }) {
  return (
    <>
      {opts.map((opt) => (
        <div className="opt">
          <input
            type="radio"
            id={opt}
            value={opt}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <label htmlFor={opt}>{opt}</label>
        </div>
      ))}
    </>
  );
}

export default Options;
