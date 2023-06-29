import { Schema, model } from "mongoose";

const staffSchema = new Schema(
  {
    name: { type: "string", required: true, trim: true},
    age: { type: "number", required: true },
    categorys: { type: "string", required: true },
    grops: { type: "number", required: true },
    // salary: { type: "number"},
  },
  { timestamps: true }
);

export default model("Teachr", staffSchema);
