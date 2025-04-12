import { useState } from "react";
import useTheme from "../Hooks/useTheme";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

const FilterJops = ({
  handleChange,
  SelectInput,
}: {
  handleChange: any;
  SelectInput: string;
}) => {
  const { theme } = useTheme();
  const [FilterState, setFilterState] = useState(false);

  const handleClick = () => {
    setFilterState(!FilterState);
  };
  return (
    <div
      className={`${
        theme == "light"
          ? "bg-[#f1f1f1] text-black"
          : "bg-black text-white border-[1px]"
      } w-60 p-4 rounded-md shadow-xl`}
    >
      <h1
        className="text-xl font-bold flex items-center gap-3"
        onClick={handleClick}
      >
        Filter Jops{" "}
        {FilterState ? (
          <IoMdArrowDropdown className="mt-1" />
        ) : (
          <IoMdArrowDropright className="mt-1" />
        )}
      </h1>

      {FilterState ? (
        <div className="mt-5">
          <h1 className="text-lg font-semibold">Status</h1>
          <form action="" className="mt-2 flex flex-col gap-2">
            <p className="flex gap-3">
              <input
                type="radio"
                id="All"
                name="status"
                value="All"
                checked={SelectInput === "All"}
                onChange={handleChange}
              />
              <label htmlFor="All">All</label>
            </p>
            <p className="flex gap-3">
              <input
                type="radio"
                id="Applied"
                name="status"
                value="Applied"
                onChange={handleChange}
              />
              <label htmlFor="Applied">Applied</label>
            </p>
            <p className="flex gap-3">
              <input
                type="radio"
                id="Interview"
                name="status"
                value="Interview"
                onChange={handleChange}
              />
              <label htmlFor="Interview">Interview</label>
            </p>
            <p className="flex gap-3">
              <input
                type="radio"
                id="Offer"
                name="status"
                value="Offer"
                onChange={handleChange}
              />
              <label htmlFor="Offer">Offer</label>
            </p>
            <p className="flex gap-3">
              <input
                type="radio"
                id="Rejected"
                name="status"
                value="Rejected"
                onChange={handleChange}
              />
              <label htmlFor="Rejected">Rejected</label>
            </p>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default FilterJops;
