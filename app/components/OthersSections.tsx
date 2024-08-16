import Link from "next/link";
import StaticData from "../config/StaticData";
import OtherSection from "./OtherSection";

const OthersSections = () => {
  return (
    <>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
        {StaticData.others.map((item, index) => (
          <OtherSection data={item} key={index} />
        ))}
      </div>
      <div className="my-10 flex justify-center">
        <Link
          className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
          href="/archive"
        >
          <span>View all Posts</span>
        </Link>
      </div>
    </>
  );
};

export default OthersSections;
