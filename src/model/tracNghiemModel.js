import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Question = new Schema(
  {
    quest: { type: String, maxLength: 2000 },
    ans_1: { type: String, maxLength: 255 },
    ans_2: { type: String, maxLength: 255 },
    ans_3: { type: String, maxLength: 255 },
    ans_4: { type: String, maxLength: 255 },
    ans_true: { type: String, maxLength: 255 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Question", Question);
