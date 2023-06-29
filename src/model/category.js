import { Schema, model } from "mongoose";

const catecorySchema = new Schema(
  {
    title: { type: "string", required: true },
    price: { type: "number", required: true },
  },
  { timestamps: true }
);

export default model("Category", catecorySchema);
