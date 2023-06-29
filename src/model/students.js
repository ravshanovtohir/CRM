import { Schema, model } from "mongoose";

const studentSchema = new Schema(
  {
    name: { type: "string", required: true },
    date_birth: { type: Date, required: true, trim: true },
    gender: { type: String, required: true, enum: "male" || "female" },
    category: { type: "string", required: true },
    phoneNumber: { type: "string", required: true },
    group: { type: Schema.Types.ObjectId, ref: "Group", required: false },
    days: [{ type: Object, required: true }],
  },
  { timestamps: true }
);

export default model("Student", studentSchema);