import React from "react";
import { MainSecData } from "../config/StaticData";
import MainItem from "./MainItem";

const MainSec = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {MainSecData.map((item, index) => (
        <MainItem data={item} key={index} />
      ))}
    </div>
  );
};

export default MainSec;
