import React from "react";
import Image from "next/image";
import Link from "next/link";

const OtherSection = ({ data }) => {
  return (
    <>
      <div className="group cursor-pointer">
        <div
          className=" overflow-hidden rounded-md bg-gray-100
         transition-all hover:scale-105   dark:bg-gray-800"
        >
          <Link className="relative block aspect-square" href="/post/1">
            <Image
              src={data.imgurl}
              alt={data.title}
              title={data.title}
              width={500}
              height={270}
              className="w-full h-full"
            />
          </Link>
        </div>
        <div className="">
          <div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <Link href="/">
                <span
                  className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] 
                  duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                >
                  {data.title}
                </span>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherSection;
