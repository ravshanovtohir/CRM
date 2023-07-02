import { Schema, model } from "mongoose";

const teacherSchema = new Schema(
  {
    name: {
      type: "string",
      required: true,
      trim: true
    },
    age: {
      type: "number",
      required: true
    },
    phone_number: {
      type: "string",
      required: true
    },
    gender: {
      type: String,
      enum: ["female", "male"],
      required: true
    },
    salary: {
      type: Number,
      required: true
    },
    img: {
      type: "string",
      required: true
    }

    // grops: { type: "number", required: true },
    // salary: { type: "number"},
  },
  { timestamps: true }
);

export default model("Teachr", teacherSchema);
