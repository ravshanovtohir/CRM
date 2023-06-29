import { Schema, model } from "mongoose";

const davomatSchema = new Schema(
  {
    group: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  },
  { timestamps: true }
);

export default model("Davomat", davomatSchema);
