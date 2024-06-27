function InputBox({
  label,
  amount,
  onCurrencyChange,
  onAmountChange,
  selectCurrency = "usd",
  extraClasses,
  amountDisable,
  currencyInfo = {},
}) {
  const currencyArr = Object.keys(currencyInfo);
  console.log(currencyArr);
  return (
    <div
      className={`container w-full bg-white flex justify-between items-center rounded-md ${extraClasses}`}
    >
      <div className="w-1/2 p-4">
        <label
          htmlFor={selectCurrency}
          className="p-2 text-3xl capitalize text-gray-500"
        >
          {label}
        </label>
        <input
          type="number"
          value={amount}
          id={selectCurrency}
          className="p-2 text-2xl mt-3 w-full"
          onChange={onAmountChange}
        />
      </div>
      <div className="w-1/2 p-4 text-right">
        <label
          htmlFor={selectCurrency}
          className="p-2 text-3xl capitalize text-gray-500"
        >
          currency type
        </label>
        <br />
        <select
          className="p-2 text-2xl bg-slate-200 rounded-md mt-3"
          value={selectCurrency}
          onChange={onCurrencyChange}
        >
          {currencyArr.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
