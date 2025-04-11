import { useState } from "react";
import FilterJops from "../Components/FilterJops";
import Jopinfo from "../Components/Jopinfo";
import GetJopsLoader from "../Components/Shared/Jops/GetJopsLoader";
import useLoading from "../Hooks/useLoading";
import { container } from "../Style";
import WithLoader from "../Utils/WithLoader";

const Jops = () => {
  const LoadedJops = WithLoader(Jopinfo);
  const { loading } = useLoading();
  const [SelectInput, setSelectInput] = useState("All");
  const handleChange = (el: React.ChangeEvent<HTMLInputElement>) => {
    setSelectInput(el.target.value);
  };
  return (
    <>
      <div
        className={`${container} gap-4 max-sm:flex-col`}
        style={{ justifyContent: "start", alignItems: "start" }}
      >
        <FilterJops handleChange={handleChange} SelectInput={SelectInput} />
        <GetJopsLoader resourceName="jops" status={SelectInput}>
          <LoadedJops loading={loading} />
        </GetJopsLoader>
      </div>
    </>
  );
};

export default Jops;
