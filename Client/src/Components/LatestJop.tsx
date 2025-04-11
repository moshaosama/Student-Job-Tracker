import useLoading from "../Hooks/useLoading";
import { content } from "../Style";
import WithLoader from "../Utils/WithLoader";
import AddJopForm from "./AddJopForm";
import Jopinfo from "./Jopinfo";
import GetJopsLoader from "./Shared/Jops/GetJopsLoader";
import useAddForm from "../Hooks/useAddForm";

const LatestJop = () => {
  const LoadedJopInfo = WithLoader(Jopinfo);
  const { loading } = useLoading();
  const { AddFromState, handleClick } = useAddForm();
  return (
    <>
      <div className={`${content}`}>
        <div className="flex justify-between w-full">
          <h1 className="text-3xl font-bold">
            <span className="text-purple-400">Latest and Top</span> Job Logs
          </h1>
          <button
            className="bg-purple-400 w-20 font-semibold cursor-pointer hover:bg-gray-600 transition-all duration-300 rounded-xl"
            onClick={handleClick}
          >
            Add Jop
          </button>
        </div>

        <GetJopsLoader resourceName="jops" status="All">
          <LoadedJopInfo loading={loading} />
        </GetJopsLoader>

        {AddFromState ? (
          <div className="w-full bg-[#0000008f] absolute top-0 left-0 h-screen flex justify-center items-center ">
            <AddJopForm setAddForm={handleClick} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default LatestJop;
