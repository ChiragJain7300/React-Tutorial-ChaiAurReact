function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  classes,
}) {
  return (
    <div className="container rounded-md bg-white w-full flex p-3 mb-2">
      <div className="w-1/2">
        <label className="text-2xl text-gray-500 capitalize font-semibold text-left block mb-3">
          {label}
        </label>
        <input
          type="number"
          className="text-xl p-2 rounded-md block"
          placeholder={0}
        />
      </div>
      <div className="w-1/2">
        <label className="text-2xl text-gray-500 capitalize font-semibold text-right block mb-3">
          Currency Type
        </label>
        <select
          name="cars"
          id="cars"
          className="p-2 rounded-md block ms-auto text-xl bg-gray-200"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  );
}

export default Input;
