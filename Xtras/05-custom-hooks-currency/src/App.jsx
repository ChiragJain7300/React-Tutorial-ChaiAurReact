// import { useState } from "react";
import "./App.css";
import CurrencyForm from "./components/CurrencyForm";

function App() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-5xl text-red-600 font-bold mb-6 uppercase">
          Currency Coverter
        </h1>

        <CurrencyForm />
      </div>
    </>
  );
}

export default App;
