import FilterJops from "../Components/FilterJops";
import Jopinfo from "../Components/Jopinfo";
import GetJopsLoader from "../Components/Shared/Jops/GetJopsLoader";
import useLoading from "../Hooks/useLoading";
import { container } from "../Style";
import WithLoader from "../Utils/WithLoader";

const Jops = () => {
  const LoadedJops = WithLoader(Jopinfo);
  const { loading } = useLoading();
  return (
    <>
      <div
        className={`${container} gap-4`}
        style={{ justifyContent: "start", alignItems: "start" }}
      >
        <FilterJops />
        <GetJopsLoader resourceName="jops">
          <LoadedJops loading={loading} />
        </GetJopsLoader>
      </div>
    </>
  );
};

export default Jops;
