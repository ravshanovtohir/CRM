import { Schema, model } from "mongoose";

const chiqimSchema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    filial: { type: "string", required: true },
    name: { type: "string", required: true },
    date: { type: "date", required: true },
    price: { type: "number", required: true },
    description: { type: "string" },
  },
  { timestamps: true }
);

export default model("Chiqim", chiqimSchema);
