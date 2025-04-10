import { CiSearch } from "react-icons/ci";
import LatestJop from "../Components/LatestJop";

const Home = () => {
  return (
    <>
      <div className="w-full flex justify-center pt-20">
        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-red-500 bg-[#f3f3f3] rounded-full px-3 py-1 w-fit font-semibold">
            No.1 Job Log Website
          </h1>

          <h1 className="text-4xl font-bold w-80">
            Search, Apply &{" "}
            <span className="text-purple-400">track forever</span>.
          </h1>

          <p className="text-[rgb(150,150,150)]  text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          {/* InputField */}

          <form action="" className="flex items-center">
            <input
              type="text"
              className="p-2 w-[40pc] rounded-l-full shadow-xl border-[1px] border-gray-300 border-solid"
              placeholder="Find Your Jop"
            />
            <button className="bg-purple-400 p-[9px] text-white text-2xl w-14 flex justify-center rounded-r-full cursor-pointer hover:bg-gray-600 transition-all duration-300">
              <CiSearch />
            </button>
          </form>
        </div>
      </div>
      <LatestJop />
    </>
  );
};

export default Home;
