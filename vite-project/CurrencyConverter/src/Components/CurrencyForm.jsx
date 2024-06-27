import { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../Hooks/useCurrencyInfo";

function CurrencyForm() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currencyInfo = useCurrencyInfo(from);
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}
    >
      <div className="container rounded-md w-1/3 p-5 bg-slate-400 mx-auto shadow-xl">
        <InputBox
          label="from"
          currencyInfo={currencyInfo}
          amount={amount}
          onAmountChange={(e) => setAmount(Number(e.target.value))}
          onCurrencyChange={(e) => setFrom(e.target.value)}
        />
        <button
          type="button"
          value="swap"
          className="p-1 bg-blue-800 text-lg text-white rounded-md my-2 mx-auto w-2/12 block"
        >
          swap
        </button>
        <InputBox
          label="to"
          extraClasses="mb-3"
          selectCurrency="inr"
          currencyInfo={currencyInfo}
          amount={convertedAmount}
          onAmountChange={(e) => setConvertedAmount(Number(e.target.value))}
          onCurrencyChange={(e) => setTo(e.target.value)}
        />
        <button
          className="uppercase p-3 rounded-md w-full bg-blue-800 text-white text-xl"
          type="submit"
        >
          convert from {from} to {to}
        </button>
      </div>
    </form>
  );
}

export default CurrencyForm;
