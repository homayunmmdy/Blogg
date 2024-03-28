import React from "react";
import MainItem from "./MainItem";
import StaticData from "../config/StaticData";

const MainSec = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {StaticData.MainSec.map((item, index) => (
        <MainItem data={item} key={index} />
      ))}
    </div>
  );
};

export default MainSec;
