import CurrencyForm from "./Components/CurrencyForm";
function App() {
  return (
    <>
      <div className="m-0 b-0 w-screen h-screen bg-blue-700">
        <h1 className="text-6xl uppercase font-bold text-amber-400 text-center font-['Apple_Color_Emoji'] tracking-wide">
          currency converter
        </h1>
        <CurrencyForm />
      </div>
    </>
  );
}

export default App;
