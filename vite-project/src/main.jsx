import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import EmailInput from "./emailInput.jsx";
import BgChanger from "./bgChanger.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <EmailInput />
    <BgChanger />
  </React.StrictMode>
);
