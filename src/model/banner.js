import { Schema, model } from "mongoose";

const bannerSchema = new Schema(
  {
    title: { type: "string", required: true },
    img: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  { timestamps: true }
);

export default model("Banner", bannerSchema);
