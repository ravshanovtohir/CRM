import { Schema, model } from "mongoose";

const staffSchema = new Schema(
  {
    name: {
      type: "string",
      required: true
    },
    rol: {
      type: Schema.Types.ObjectId,
      required: true
    },
    password: {
      type: "string",
      required: true
    },
    phoneNumber: {
      type: "string",
      required: true
    },
  },
  {
    timestamps: true
  }
);

export default model("Staff", staffSchema);
