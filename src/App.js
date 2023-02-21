import "./App.css";
import Input from "./component/Input";
import TopButtons from "./component/TopButtons";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TimeAndLocation from "./component/TimeAndLocation";
import Detail from "./component/Detail";
function App() {
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-4 px-32 bg-gradient-to-br from-cyan-700 to-blue-700">
        <TopButtons />
        <Input />
        <TimeAndLocation />
        <Detail />
      </div>
    </>
  );
}

export default App;
