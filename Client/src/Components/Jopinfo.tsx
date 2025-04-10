import { Link } from "react-router";

interface jopDataArray {
  jops?: {
    statusbar: string;
    Jops: {
      _id: string;
      company: string;
      location: string;
      role: string;
      status: string;
      date: string;
      link: string;
    }[];
  };
}

interface jopData {
  jops?: {
    statusbar: string;
    Jops: {
      _id: string;
      company: string;
      location: string;
      role: string;
      status: string;
      date: string;
      link: string;
    };
  };
}

const Jopinfo = ({ jops }: jopDataArray | jopData) => {
  const { pathname } = window.location;

  return (
    <>
      {Array.isArray(jops?.Jops) ? (
        <div className="grid grid-cols-3 w-full gap-y-5">
          {jops?.Jops?.map((jop, i) => {
            return (
              <Link
                to={`${pathname == "/" ? `/jops/${jop._id}` : `${jop._id}`}`}
                key={i}
              >
                <div className="border-[1px] cursor-pointer hover:bg-gray-100 border-gray-200 border-solid flex shadow-lg flex-col gap-1  rounded-lg px-5 py-2 w-96">
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
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="w-full">
          <h1 className="text-xl font-bold">{jops?.Jops?.role}</h1>
          <div className="flex gap-2 items-center mt-4">
            <p className="text-blue-400 border-[1px] border-solid px-2 font-bold rounded-full w-fit">
              {jops?.Jops?.status}
            </p>
            <p className="text-orange-400 border-[1px] border-solid px-2 font-bold rounded-full w-fit">
              Full Time
            </p>
            <p className="text-purple-400 border-[1px] border-solid px-2 font-bold rounded-full w-fit">
              {jops?.Jops?.date}
            </p>
          </div>
          <div className="mt-10 w-full">
            <p className="font-semibold">Jop Description</p>
            <hr className="bg-[#ddd] border-none h-1 mt-1" />
            <div className="mt-3">
              <p>
                <strong>Role: </strong>
                {jops?.Jops?.role}
              </p>
              <p>
                <strong>Location: </strong>
                {jops?.Jops?.location}
              </p>
              <p>
                <strong>Company: </strong>
                {jops?.Jops?.company}
              </p>
              <p>
                <strong>Status: </strong>
                {jops?.Jops?.status}
              </p>
              <p>
                <strong>Date: </strong>
                {jops?.Jops?.date}
              </p>
              <p>
                <strong>Visit Link: </strong>
                <span className="text-blue-400 underline cursor-pointer">
                  {jops?.Jops?.link}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Jopinfo;
