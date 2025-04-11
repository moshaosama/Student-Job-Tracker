import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch, RootState } from "../Store/Store";
import { fetchAllJopByid } from "../Store/Reducer/GetJopById";
import { useEffect, useState } from "react";
import { fetchEditJop } from "../Store/Reducer/UpdateJop";

const EditJopForm = ({ setEditForm }: { setEditForm: () => void }) => {
  const stateData = useSelector((state: RootState) => state.jopByid);
  const [formData, setFormData] = useState({
    company: stateData?.data?.Jops?.company || "",
    role: stateData?.data?.Jops?.role || "",
    location: stateData?.data?.Jops?.location || "",
    status: stateData?.data?.Jops?.status || "",
    link: stateData?.data?.Jops?.link || "",
  });

  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAllJopByid(id as string));
  }, []);

  const handleChange = (el: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [el.target.name]: el.target.value });
  };

  const handleSubmit = async (el: any) => {
    try {
      el.preventDefault();
      await dispatch(
        fetchEditJop({
          id: id!,
          updatedData: formData,
        })
      );
      await dispatch(fetchAllJopByid(id!));
      setEditForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`bg-white w-[50pc] max-sm:w-[21pc] p-3  rounded-xl`}>
      <h1 className="text-lg text-black font-bold">Edit Jop</h1>

      <form className="mt-3 flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            className="p-1 border-[1px] rounded-md border-gray-400"
            name="company"
            value={formData.company || ""}
            onChange={handleChange}
          />
          <span className="text-red-600"></span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            className="p-1 border-[1px] rounded-md border-gray-400"
            value={formData.role || ""}
            onChange={handleChange}
          />
          <span className="text-red-600"></span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="p-1 border-[1px] rounded-md border-gray-400"
            value={formData.location || ""}
            onChange={handleChange}
          />
          <span className="text-red-600"></span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="status">Status</label>
          <select
            className="p-1 border-[1px] rounded-md border-gray-400"
            name="status"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          >
            <option value="Most Popular">Most Popular</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
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
            name="link"
            value={formData.link || ""}
            onChange={handleChange}
          />
          <span className="text-red-600"></span>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-400 w-40 max-sm:w-20 py-1 rounded-lg font-semibold cursor-pointer">
            Edit
          </button>
          <button
            className="bg-red-400 w-40 max-sm:w-20 py-1 rounded-lg font-semibold cursor-pointer"
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
