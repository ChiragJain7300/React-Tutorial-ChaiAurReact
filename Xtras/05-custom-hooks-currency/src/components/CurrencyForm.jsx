import Input from "./Input";

function CurrencyForm() {
  return (
    <div className="container w-1/2 mx-auto bg-slate-300 rounded-md p-6 shadow-2xl relative">
      <form>
        <Input />
        <div className="relative w-full h-0.5">
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
          >
            swap
          </button>
        </div>
        <Input />
        <button className="w-full bg-blue-700 text-white text-2xl p-3 rounded-md mt-2">
          Convert Curr1 to Curr2
        </button>
      </form>
    </div>
  );
}

export default CurrencyForm;
