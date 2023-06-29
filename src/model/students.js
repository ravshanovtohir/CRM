import { Schema, model } from "mongoose";

const studentSchema = new Schema(
  {
    name: { type: "string", required: true },
    age: { type: "number", required: true },
    category: { type: "string", required: true },
    phoneNumber: { type: "string", required: true },
    group: { type: Schema.Types.ObjectId, ref: "Group", required: false },
    days: [{ type: Object, required: true }],
  },
  { timestamps: true }
);

export default model("Student", studentSchema);
