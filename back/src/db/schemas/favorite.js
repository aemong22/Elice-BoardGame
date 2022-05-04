import { Schema, model } from "mongoose";

const FavoriteSchema = new Schema(
    {
        user: {
            type: String,
            required: true,
        },
        boardgame: [
            {
                type: Schema.Types.ObjectId,
                required: false,
                ref: "boardgames",
            },
        ],
    },

    {
        timestamps: true,
    }
);

const FavoriteModel = model("Favorite", FavoriteSchema);

export { FavoriteModel };
