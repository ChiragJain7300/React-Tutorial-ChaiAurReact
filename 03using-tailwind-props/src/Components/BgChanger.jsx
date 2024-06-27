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
      <div className="mb-4 p-3 bg-gray-700 rounded-md w-1/2 m-auto">
        <h2 className="text-2xl font-semibold mb-4">Color-Code : {color}</h2>
        <button onClick={changeBg} className="">
          Generate Random Background
        </button>
      </div>
    </>
  );
};

export default BgChanger;
