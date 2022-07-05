import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: { type: String, maxLength: 255 },
    password: { type: String, maxLength: 255 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", User);
