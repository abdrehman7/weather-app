import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
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
      <div className="flex text-white justify-between items-center text-xl mt-4">
        <UilSun />
        <p>
          Rise <span>3:23</span>
        </p>
        <p>|</p>
        <UilSunset />
        <p>
          Set <span>4:34</span>
        </p>
        <p>|</p>
        <UilSunset />
        <p>
          Height <span>45</span>
        </p>
        <p>|</p>
        <UilSunset />
        <p>
          Low <span>4</span>
        </p>
      </div>
    </>
  );
};

export default Detail;
