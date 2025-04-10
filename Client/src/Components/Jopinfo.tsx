interface jopData {
  jops?: {
    statusbar: string;
    Jops: {
      company: string;
      location: string;
      role: string;
      status: string;
      date: string;
      link: string;
    }[];
  };
}

const Jopinfo = ({ jops }: jopData) => {
  console.log("====================================");
  console.log(jops);
  console.log("====================================");
  return (
    <>
      <div className="grid grid-cols-3 w-full gap-y-5">
        {jops?.Jops?.map((jop, i) => {
          return (
            <div
              key={i}
              className="border-[1px] cursor-pointer hover:bg-gray-100 border-gray-200 border-solid flex shadow-lg flex-col gap-1  rounded-lg px-5 py-2 w-96"
            >
              <h1 className="font-bold">{jop?.company}</h1>
              <p className="text-[#969696]">{jop?.location}</p>
              <h1 className="font-bold">{jop?.role}</h1>
              <p className="text-[#969696]">
                i need senior FullStack Developer, who can able to write the
                effiecient code.
              </p>
              <div className="flex gap-2 items-center mt-4">
                <p className="text-blue-400 border-[1px] border-solid px-2 font-bold rounded-full w-fit">
                  {jop?.status}
                </p>
                <p className="text-orange-400 border-[1px] border-solid px-2 font-bold rounded-full w-fit">
                  Full Time
                </p>
                <p className="text-purple-400 border-[1px] border-solid px-2 font-bold rounded-full w-fit">
                  {jop?.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Jopinfo;
