import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        user_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone_number: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
            default: "기본",
        },
        OAuthProvider: {
            type: String,
            required: true,
            default: "home",
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = model("User", UserSchema);

export { UserModel };
