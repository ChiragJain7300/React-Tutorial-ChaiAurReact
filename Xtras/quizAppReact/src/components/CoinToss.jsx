import React, { useState } from "react";

function CoinToss() {
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [tossResult, setTossResult] = useState(null);
  const flipCoin = () => {
    setTossResult(Math.floor(Math.random() * 2));
    if (tossResult === 0) setHeads(heads + 1);
    else setTails(tails + 1);
  };
  return (
    <>
      <h1>Let's Flip a Coin</h1>
      <div className="imgCont">
        {tossResult ? (
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-1d5a0e61da032da066453daa3fb43b50.webp"
            className="heads"
          />
        ) : (
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26-lq"
            className="tails"
          />
        )}
      </div>
      <button className="btn" onClick={flipCoin}>
        FLIP ME !!!
      </button>
      <h2>
        Out of {heads + tails} flips, there have been {heads} heads and {tails}{" "}
        tails
      </h2>
    </>
  );
}

export default CoinToss;
