import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface jopData {
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
}

const EditJopForm = ({ setEditForm }: { setEditForm: () => void }) => {
  const [stateData, setStateData] = useState<jopData>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/jop/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStateData(data);
      });
  }, [id]);

  return (
    <div className={`bg-white w-[50pc] p-3  rounded-xl`}>
      <h1 className="text-lg text-black font-bold">Edit Jop</h1>

      <form className="mt-3 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            className="p-1 border-[1px] rounded-md border-gray-400"
            placeholder="Company"
            value={stateData?.Jops?.company || ""}
            onChange={() => {}}
          />
          <span className="text-red-600"></span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            className="p-1 border-[1px] rounded-md border-gray-400"
            placeholder="Role"
            value={stateData?.Jops?.role || ""}
            onChange={() => {}}
          />
          <span className="text-red-600"></span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="role"
            className="p-1 border-[1px] rounded-md border-gray-400"
            placeholder="Location"
            value={stateData?.Jops?.location || ""}
            onChange={() => {}}
          />
          <span className="text-red-600"></span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="status">Status</label>
          <select className="p-1 border-[1px] rounded-md border-gray-400">
            <option value="Most Popular">Most Popular</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview </option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
          <span className="text-red-600"></span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="link">Link</label>
          <input
            type="text"
            id="link"
            className="p-1 border-[1px] rounded-md border-gray-400"
            placeholder="Link"
            value={stateData?.Jops?.link || ""}
            onChange={() => {}}
          />
          <span className="text-red-600"></span>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-400 w-40 py-1 rounded-lg font-semibold cursor-pointer">
            Edit
          </button>
          <button
            className="bg-red-400 w-40 py-1 rounded-lg font-semibold cursor-pointer"
            onClick={setEditForm}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJopForm;
