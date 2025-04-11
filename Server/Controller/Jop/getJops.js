import mongoose from "mongoose";
import JopModel from "../../Models/JopModel.js";

export const getJop = async (req, res) => {
  try {
    const Jops = await JopModel.find();

    if (Jops.length === 0) {
      return res.status(404).json({
        statusbar: "error",
        message: "You don't have any jobs.",
      });
    }

    return res.status(200).json({
      statusbar: "success",
      Jops,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "error",
      message: error.message || "An error occurred while fetching jobs.",
    });
  }
};

export const getJopById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        statusbar: "error",
        message: "Please enter a job id",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        statusbar: "error",
        message: "Invalid job id",
      });
    }

    const Jop = await JopModel.findById(id);

    if (!Jop) {
      return res.status(404).json({
        statusbar: "error",
        message: "Job not found",
      });
    }

    return res.status(200).json({
      statusbar: "success",
      Jop,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "error",
      message: error.message || "An error occurred while fetching the job",
    });
  }
};
