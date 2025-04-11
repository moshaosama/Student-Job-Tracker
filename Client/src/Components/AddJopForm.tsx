import { useForm } from "react-hook-form";
import useNotify from "../Hooks/useNotify";
import { ToastContainer } from "react-toastify";

const AddJopForm = ({ setAddForm }: { setAddForm: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const date = new Date();
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  const { notifySuccess, notifyError } = useNotify();

  const handleSubmitData = (data: any) => {
    fetch("http://localhost:3000/createjop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, date: formattedDate }),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        notifySuccess("Addedd Successfully!❤️");
      })
      .catch((err) => {
        notifyError(err as string);
      });
  };

  return (
    <div className={`bg-white w-[50pc] p-3  rounded-xl`}>
      <h1 className="text-lg text-black font-bold">Add New Jop</h1>

      <form
        onSubmit={handleSubmit(handleSubmitData)}
        className="mt-3 flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            className="p-1 border-[1px] rounded-md border-gray-400"
            placeholder="Company"
            {...register("company", { required: "Company is required" })}
          />
          <span className="text-red-600">
            {errors?.company?.message as string}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            className="p-1 border-[1px] rounded-md border-gray-400"
            placeholder="Role"
            {...register("role", { required: "Role is required" })}
          />
          <span className="text-red-600">
            {errors?.role?.message as string}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="role"
            className="p-1 border-[1px] rounded-md border-gray-400"
            placeholder="Location"
            {...register("location", { required: "Location is required" })}
          />
          <span className="text-red-600">
            {errors?.role?.message as string}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="status">Status</label>
          <select
            className="p-1 border-[1px] rounded-md border-gray-400"
            {...register("status", { required: "Status is required" })}
          >
            <option value="Most Popular">Most Popular</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview </option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
          <span className="text-red-600">
            {errors?.status?.message as string}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="link">Link</label>
          <input
            type="text"
            id="link"
            className="p-1 border-[1px] rounded-md border-gray-400"
            placeholder="Link"
            {...register("link", { required: "Link is required" })}
          />
          <span className="text-red-600">
            {errors?.link?.message as string}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-400 w-40 py-1 rounded-lg font-semibold cursor-pointer"
            disabled={isSubmitting}
          >
            Add
          </button>
          <button
            className="bg-red-400 w-40 py-1 rounded-lg font-semibold cursor-pointer"
            onClick={setAddForm}
          >
            Cancel
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddJopForm;
