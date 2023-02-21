import React from "react";

const TimeAndLocation = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <p className="text-white mr-3">Tuesday,31 May 2022</p>
        <span className="text-white mr-3">|</span>
        <p className="text-white">Local Time 12:04</p>
      </div>
      <div className="flex justify-center">
        <p className="text-white font-medium">Sialkot</p>
      </div>
    </>
  );
};

export default TimeAndLocation;
