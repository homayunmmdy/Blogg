import React from "react";
import MainSec from "./components/MainSec";

const Home = () => {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-12 px-5 md:px-10 gap-2">
        <div className="col-span-0 md:col-span-1"></div>
        <div className="col-span-12 md:col-span-10">
          <MainSec />
        </div>
        <div className="col-span-0 md:col-span-1"></div>
      </div>
    </div>
  );
};

export default Home;
