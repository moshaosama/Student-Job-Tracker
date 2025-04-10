import useLoading from "../Hooks/useLoading";
import { content } from "../Style";
import WithLoader from "../Utils/WithLoader";
import Jopinfo from "./Jopinfo";
import GetJopsLoader from "./Shared/Jops/GetJopsLoader";

const LatestJop = () => {
  const LoadedJopInfo = WithLoader(Jopinfo);
  const { loading } = useLoading();
  return (
    <>
      <div className={`${content}`}>
        <h1 className="text-3xl font-bold">
          <span className="text-purple-400">Latest and Top</span> Job Logs
        </h1>

        <GetJopsLoader resourceName="jops">
          <LoadedJopInfo loading={loading} />
        </GetJopsLoader>
      </div>
    </>
  );
};

export default LatestJop;
