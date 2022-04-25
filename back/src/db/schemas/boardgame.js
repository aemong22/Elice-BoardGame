import { Schema, model } from "mongoose";

const BoardGameSchema = new Schema(
  {
    index: {
      type: Integer,
      unique: true,
      required: true,
    },
    unNamed: {
      type: Integer,
      required: true,
    },
    gameId: {
      type: Integer,
      required: true,
    },
    gameName: {
      type: String,
      required: true,
    },
    year: {
      type: Integer,
      required: true,
    },
    rank: {
      type: Integer,
      required: true,
    },
    averageRating: {
      // Rating이 맞나 ??
      type: Integer,
      required: true,
    },
    bayesAverage: {
      // bayes 를 db에 넣을것인가???
      type: Integer,
      required: true,
    },
    userRated: {
      type: Integer,
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
      type: Integer,
      required: true,
    },
    maxPlayer: {
      type: Integer,
      required: true,
    },
    minAge: {
      type: Integer,
      required: true,
    },
    playingTime: {
      type: Integer,
      required: true,
    },
    minPlayingTime: {
      type: Integer,
      required: true,
    },
    maxPlayingTime: {
      type: Integer,
      required: true,
    },
    complexityAverage: {
      type: Integer,
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
      type: [Integer],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BoardGameModel = model("Token", BoardGameSchema);

export { BoardGameModel };
