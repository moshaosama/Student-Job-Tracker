import useTheme from "../Hooks/useTheme";

const FilterJops = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme == "light"
          ? "bg-[#f1f1f1] text-black"
          : "bg-black text-white border-[1px]"
      } w-60 p-4 rounded-md shadow-xl`}
    >
      <h1 className="text-xl font-bold">Filter Jops</h1>

      <div className="mt-5">
        <h1 className="text-lg font-semibold">Status</h1>
        <form action="" className="mt-2 flex flex-col gap-2">
          <p className="flex gap-3">
            <input type="radio" id="All" name="status" value="All" />
            <label htmlFor="All">All</label>
          </p>
          <p className="flex gap-3">
            <input type="radio" id="Applied" name="status" value="Applied" />
            <label htmlFor="Applied">Applied</label>
          </p>
          <p className="flex gap-3">
            <input
              type="radio"
              id="Interview"
              name="status"
              value="Interview"
            />
            <label htmlFor="Interview">Interview</label>
          </p>
          <p className="flex gap-3">
            <input type="radio" id="Offer" name="status" value="Offer" />
            <label htmlFor="Offer">Offer</label>
          </p>
          <p className="flex gap-3">
            <input type="radio" id="Rejected" name="status" value="Rejected" />
            <label htmlFor="Rejected">Rejected</label>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FilterJops;
