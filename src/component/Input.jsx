import React from "react";
import { UilSearch, UilLocationPinAlt } from "@iconscout/react-unicons";
const Input = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-around">
        <div className="flex flex-row w-3/4 items-center space-x-4 ">
          <input
            type="text"
            placeholder="Search city...."
            className="focus:outline-none p-2 w-full capitalize placeholder:lowercase"
          />
          <UilSearch className="text-white cursor-pointer" />
          <UilLocationPinAlt className="text-white cursor-pointer" />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center ">
          <button className="text-white"> °C</button>
          <span className="text-white">|</span>
          <button className="text-white "> °F</button>
        </div>
      </div>
    </>
  );
};

export default Input;
