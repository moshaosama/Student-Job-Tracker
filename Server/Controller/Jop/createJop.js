import JopModel from "../../Models/JopModel.js";

export const createJop = async (req, res) => {
  try {
    const { company, location, role, status, date, link } = req.body;

    const newJop = new JopModel({
      company,
      location,
      role,
      status,
      date,
      link,
    });

    await newJop.save();

    res.status(200).json({
      statusbar: "success",
      newJop,
    });
  } catch (error) {
    res.status(500).json({
      statusbar: "error",
      message: error,
    });
  }
};
