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
    gender: {
      type: String,
      enum: "male" || "female",
      required: true
    },
    date_birth: {
      type: Date,
      required: true,
      trim: true
    },
    img: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    is_ceo: {
      type: Boolean,
      default: false
    },
    is_admin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default model("Staff", staffSchema);
