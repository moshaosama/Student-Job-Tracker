import mongoose from "mongoose";
const Schema = mongoose.Schema;

const jopSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Applied", "Interview", "Offer", "Rejected"],
  },
  date: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const JopModel = mongoose.model("jopDetail", jopSchema);

export default JopModel;
