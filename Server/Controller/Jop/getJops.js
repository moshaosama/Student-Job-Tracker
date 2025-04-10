import JopModel from "../../Models/JopModel.js";

export const getJop = async (req, res) => {
  try {
    const Jops = await JopModel.find();

    if (!Jops) {
      res.status(404).json({
        statusbar: "error",
        message: "you don't have any jop",
      });
    }

    res.status(200).json({
      statusbar: "success",
      Jops,
    });
  } catch (error) {
    res.status(500).json({
      statusbar: "error",
      message: error,
    });
  }
};
