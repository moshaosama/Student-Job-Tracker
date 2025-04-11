import JopModel from "../../Models/JopModel.js";

export const EditJopById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({
        statusbar: "error",
        message: "Please Enter Your id",
      });
    }

    const { company, location, role, status, date, link } = req.body;

    const JopDetail = await JopModel.findByIdAndUpdate(id, {
      company,
      location,
      role,
      status,
      date,
      link,
    });

    await JopDetail.save();

    return res.status(200).json({
      statusbar: "success",
      message: "Updated Suuccessfully! 💕",
    });
  } catch (error) {
    res.status(500).json({
      statusbar: "error",
      message: error,
    });
  }
};
