import React from "react";

const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: "sialkot",
    },
    {
      id: 2,
      title: "laore",
    },
    {
      id: 3,
      title: "multan",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => city.title)}
    </div>
  );
};

export default TopButtons;
