import { Schema, model } from "mongoose";

const FavoriteSchema = new Schema(
<<<<<<< HEAD
  {
    user: {
      type: String,
      required: true,
=======
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
>>>>>>> 00f392baed172b64a3e54dd20a45c3e75739fa71
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
