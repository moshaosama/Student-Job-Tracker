import JopModel from "../../Models/JopModel.js";

export const FilterJopByStatus = async (req, res) => {
  const { status } = req.params;

  try {
    let Jops;
    if (status === "All") {
      Jops = await JopModel.find();
    } else {
      Jops = await JopModel.find({ status: status });
    }

    return res.status(200).json({
      status: "success",
      Jops,
    });
  } catch (err) {
    console.error("Error fetching jobs:", err);
    return res.status(500).json({
      status: "error",
      message: "There was an error fetching the jobs. Please try again later.",
    });
  }
};
