import React from "react";

const Forecast = ({ title }) => {
  return (
    <>
      <div>
        <p className="text-white text-sm font-medium uppercase mt-5">{title}</p>
        <hr className="my-2" />
        <div className="flex flex-row justify-between items-center text-white">
          <div className="flex flex-col ">
            <p>4:67 PM</p>
            <p>22</p>
          </div>
          <div className="flex flex-col ">
            <p>4:67 PM</p>
            <p>22</p>
          </div>
          <div className="flex flex-col ">
            <p>4:67 PM</p>
            <p>22</p>
          </div>
          <div className="flex flex-col ">
            <p>4:67 PM</p>
            <p>22</p>
          </div>
          <div className="flex flex-col ">
            <p>4:67 PM</p>
            <p>22</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forecast;
