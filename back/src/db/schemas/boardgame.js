import { Schema, model } from "mongoose";

const BoardGameSchema = new Schema(
  {
    index: {
      type: Number,
      unique: true,
      required: true,
    },
    unNamed: {
      type: Number,
      required: true,
    },
    gameId: {
      type: Number,
      required: true,
    },
    gameName: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    rank: {
      type: Number,
      required: true,
    },
    averageRating: {
      // Rating이 맞나 ??
      type: Number,
      required: true,
    },
    bayesAverage: {
      // bayes 를 db에 넣을것인가???
      type: Number,
      required: true,
    },
    userRated: {
      type: Number,
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
      type: Number,
      required: true,
    },
    maxPlayer: {
      type: Number,
      required: true,
    },
    minAge: {
      type: Number,
      required: true,
    },
    playingTime: {
      type: Number,
      required: true,
    },
    minPlayingTime: {
      type: Number,
      required: true,
    },
    maxPlayingTime: {
      type: Number,
      required: true,
    },
    complexityAverage: {
      type: Number,
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
    description: {
      type: String,
      required: true,
    },
    recommendId: {
      type: [Number],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BoardGameModel = model("Boardame", BoardGameSchema);

export { BoardGameModel };
