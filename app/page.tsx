import React from "react";
import MainSec from "./components/MainSec";
import OthersSections from "./components/OthersSections";

const Home = () => {
  return (
    <div className="pt-2 bg-base-100">
      <div className="grid grid-cols-12 px-5 md:px-10 gap-2">
        <div className="col-span-0 md:col-span-1"></div>
        <div className="col-span-12 md:col-span-10">
          <MainSec />
          <OthersSections />
        </div>
        <div className="col-span-0 md:col-span-1"></div>
      </div>
    </div>
  );
};

export default Home;
