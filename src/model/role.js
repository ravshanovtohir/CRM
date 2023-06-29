import { Schema, model } from "mongoose";

const roleSchema = new Schema(
    {
        role_title: {
            type: "string",
            required: true
        },
    },
    {
        timestamps: true
    }
);

export default model("Role", roleSchema);


