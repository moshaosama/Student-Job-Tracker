import JopModel from "../../Models/JopModel.js";

export const DeleteJop = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({
        statusbar: "error",
        message: "Please Enter Your id",
      });
    }

    await JopModel.findByIdAndDelete(id);

    return res.status(200).json({
      statusbar: "success",
      message: "Deleted Suuccessfully! 💕",
    });
  } catch (error) {
    res.status(500).json({
      statusbar: "error",
      message: error,
    });
  }
};
