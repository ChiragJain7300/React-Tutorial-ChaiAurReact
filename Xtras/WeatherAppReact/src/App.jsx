import { useState } from "react";

function App() {
  const [city, setCity] = useState("udaipur");
  const getWeatherInfo = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=70dfb8bab420446b951172738240608&q=${city}`
    )
      .then((res) => res.json())
      .then((res) => console.log(res.current.temp_c));
  };
  return (
    <>
      <div className="w-screen min-h-screen flex flex-col place-items-center justify-center">
        {/* <div className="searchBox w-1/2 mb-8 text-center">
          <input
            className="rounded-full w-full py-4 px-6 border-none text-xl "
            type="text"
            placeholder="Enter A City..."
            name="locationName"
            id="locationName"
          />
          <button
            className="p-3 w-[150px] uppercase font-bold text-xl mt-4 mx-auto rounded-lg bg-red-700 text-white"
            onClick={getWeatherInfo}
          >
            Find
          </button>
        </div> */}
        <div className="flex bg-[url('https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover  rounded-lg weatherDisplay h-[85vh] w-3/5 bg-slate-300">
          <div className="leftSection flex-1 flex flex-col items-center">
            <div className="dateSection w-full p-5">
              <p className="text-right text-xl text-slate-950 font-bold">
                28 Septempber 2023 | 11:00
              </p>
            </div>
            <div className="weatherName flex-1">
              <p className="text-6xl text-slate-950">Mostly Rainy</p>
            </div>
            <hr className="border-gray-700 my-3 w-11/12" />
            <div className="hourlyTempForcast w-full h-1/4 bg-slate-500 mt-auto"></div>
          </div>
          <div className="rightTempSection bg-opacity-60 w-1/3 h-full bg-gray-600 self-end">
            Temperature
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
