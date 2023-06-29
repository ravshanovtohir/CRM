import { Schema, model } from "mongoose";

const kirimSchema = new Schema(
  {
    category: { type: "string", required: true },
    filial: { type: "string", required: true },
    fullName: { type: "string", required: true},
    lastName: { type: "string", required: true},
    phoneNumber: { type: "string", required: true},
    month: { type: "number", default: new Date().getMonth() +1, required: true },
    year: { type:"number", default: new Date().getFullYear(), required: true },
    price: { type: "number", required: true, trim: true },
    paymentType: { type: "string", required: true },
    description: { type: "string" },
  },
  { timestamps: true }
);

export default model("Pay", kirimSchema);
