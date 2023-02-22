import "./App.css";
import Input from "./component/Input";
import TopButtons from "./component/TopButtons";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TimeAndLocation from "./component/TimeAndLocation";
import Detail from "./component/Detail";
import Forecast from "./component/Forecast";
import getWeather from "./component/Services/Service";
function App() {
  const fetchWeather = async () => {
    const data = await getWeather("weather", { q: "london" });
    console.log(data);
  };
  fetchWeather();
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-4 px-32 bg-gradient-to-br from-cyan-700 to-blue-700">
        <TopButtons />
        <Input />
        <TimeAndLocation />
        <Detail />
        <Forecast title={"Hourly Forecast"} />
        <Forecast title={"Daily Forecast"} />
      </div>
    </>
  );
}

export default App;
