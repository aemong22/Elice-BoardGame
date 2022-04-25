import { Schema, model } from "mongoose";

const BoardGameSchema = new Schema(
  {
    index: {
      type: String,
      unique: true,
      required: true,
    },
    unNamed: {
      type: String,
      required: true,
    },
    gameId: {
      type: String,
      required: true,
    },
    gameName: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    rank: {
      type: String,
      required: true,
    },
    averageRating: {
      // Rating이 맞나 ??
      type: String,
      required: true,
    },
    bayesAverage: {
      // bayes 를 db에 넣을것인가???
      type: String,
      required: true,
    },
    userRated: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    minPlayer: {
      type: String,
      required: true,
    },
    maxPlayer: {
      type: String,
      required: true,
    },
    minAge: {
      type: String,
      required: true,
    },
    playingTime: {
      type: String,
      required: true,
    },
    minPlayingTime: {
      type: String,
      required: true,
    },
    maxPlayingTime: {
      type: String,
      required: true,
    },
    complexityAverage: {
      type: String,
      required: true,
    },
    domains: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    recommendId: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BoardGameModel = model("Boardame", BoardGameSchema);

export { BoardGameModel };
