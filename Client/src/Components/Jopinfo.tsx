import { Link } from "react-router";
import useAddForm from "../Hooks/useAddForm";
import EditJopForm from "./EditJopForm";

interface jopDataArray {
  jops?: {
    data: {
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
  };
}

interface jopData {
  jops?: {
    data: {
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
  };
}

const Jopinfo = ({ jops }: jopDataArray | jopData) => {
  const { pathname } = window.location;

  console.log(jops);

  const { handleClickEditState, EditFromState } = useAddForm();
  return (
    <>
      {Array.isArray(jops?.data?.Jops) ? (
        <div className="grid grid-cols-3 w-full gap-y-5">
          {jops?.data?.Jops?.length > 0 ? (
            <>
              {jops?.data?.Jops?.map((jop, i) => {
                return (
                  <Link
                    to={`${
                      pathname == "/" ? `/jops/${jop._id}` : `${jop._id}`
                    }`}
                    key={i}
                  >
                    <div className="border-[1px] cursor-pointer hover:bg-gray-100 border-gray-200 border-solid flex shadow-lg flex-col gap-1  rounded-lg px-5 py-2 w-96">
                      <h1 className="font-bold">{jop?.company}</h1>
                      <p className="text-[#969696]">{jop?.location}</p>
                      <h1 className="font-bold">{jop?.role}</h1>
                      <p className="text-[#969696]">
                        i need senior FullStack Developer, who can able to write
                        the effiecient code.
                      </p>
                      <div className="flex gap-2 items-center mt-4">
                        <p className="text-blue-400 border-[1px] border-solid px-2 font-bold rounded-full w-fit">
                          {jop?.status}
                        </p>
                        <p className="text-purple-400 border-[1px] border-solid px-2 font-bold rounded-full w-fit">
                          {jop?.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : (
            <h1 className="text-red-500 font-bold ">No Jops Yet!</h1>
          )}
        </div>
      ) : (
        <div className="w-full">
          <h1 className="text-xl font-bold">{jops?.data?.Jops?.role}</h1>
          <div className="flex gap-2 items-center mt-4">
            <p className="text-blue-400 border-[1px] border-solid px-2 font-bold rounded-full w-fit">
              {jops?.data?.Jops?.status}
            </p>

            <p className="text-purple-400 border-[1px] border-solid px-2 font-bold rounded-full w-fit">
              {jops?.data?.Jops?.date}
            </p>
          </div>
          <div className="mt-10 w-full">
            <div className="flex justify-between">
              <p className="font-semibold">Jop Description</p>
              <button
                className="bg-orange-400 w-20 py-1 rounded-lg font-semibold cursor-pointer hover:bg-amber-200 transition-all duration-300"
                onClick={handleClickEditState}
              >
                Edit
              </button>
            </div>
            <hr className="bg-[#ddd] border-none h-1 mt-1" />
            <div className="mt-3">
              <p>
                <strong>Role: </strong>
                {jops?.data?.Jops?.role}
              </p>
              <p>
                <strong>Location: </strong>
                {jops?.data?.Jops?.location}
              </p>
              <p>
                <strong>Company: </strong>
                {jops?.data?.Jops?.company}
              </p>
              <p>
                <strong>Status: </strong>
                {jops?.data?.Jops?.status}
              </p>
              <p>
                <strong>Date: </strong>
                {jops?.data?.Jops?.date}
              </p>
              <p>
                <strong>Visit Link: </strong>
                <span className="text-blue-400 underline cursor-pointer">
                  {jops?.data?.Jops?.link}
                </span>
              </p>
            </div>
          </div>
          {EditFromState ? (
            <div className="w-full bg-[#0000008f] absolute top-0 left-0 h-screen flex justify-center items-center ">
              <EditJopForm setEditForm={handleClickEditState} />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Jopinfo;
