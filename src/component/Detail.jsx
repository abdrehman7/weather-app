import React from "react";
import { UilTemperature, UilTear, UilWind } from "@iconscout/react-unicons";
const Detail = () => {
  return (
    <>
      <div className=" flex justify-between items-center mt-5 text-white">
        <p>34</p>
        <div className=" flex flex-col">
          <div className="flex ">
            <UilTemperature />
            Real fell:
            <span>332</span>
          </div>
          <div className="flex ">
            <UilTear />
            Humidity:
            <span>32%</span>
          </div>
          <div className="flex ">
            <UilWind />
            Wind:
            <span>11km/h</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
