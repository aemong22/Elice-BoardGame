import { Schema, model } from "mongoose";

const TokenSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
            unique: true,
        },
        refresh_token: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const TokenModel = model("Token", TokenSchema);

export { TokenModel };
