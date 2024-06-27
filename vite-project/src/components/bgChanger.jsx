import React from "react";
import { useState } from "react";

const BgChanger = () => {
  let [color, setColor] = useState("rgb(255,255,255)");
  const generateRandColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    setColor(`rgb(${red},${blue},${green})`);
    return color;
  };
  const changeBg = () => {
    document.querySelector("body").style.backgroundColor = generateRandColor();
  };
  return (
    <>
      <h2>Change Background color to a random color</h2>
      <button onClick={changeBg}>Generate Random Background</button>
      <h2>Color-Code : {color}</h2>
    </>
  );
};

export default BgChanger;
