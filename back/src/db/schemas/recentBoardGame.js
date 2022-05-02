import { Schema, model } from "mongoose";

const RecentBoardGameSchma = new Schema(
    {
        index: {
            type: Number,
            unique: true,
            required: true,
        },
        un_named: {
            type: Number,
            required: true,
        },
        game_id: {
            type: Number,
            required: true,
        },
        game_name: {
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
        average_rating: {
            type: Number,
            required: true,
        },
        bayes_average: {
            type: Number,
            required: true,
        },
        user_rated: {
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
        min_player: {
            type: Number,
            required: true,
        },
        max_player: {
            type: Number,
            required: true,
        },
        min_age: {
            type: Number,
            required: true,
        },
        playing_time: {
            type: Number,
            required: true,
        },
        min_playing_time: {
            type: Number,
            required: true,
        },
        max_playing_time: {
            type: Number,
            required: true,
        },
        complexity_average: {
            type: Number,
            required: true,
        },
        domains: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const RecentBoardGameModel = model("BoardGame2020", RecentBoardGameSchma);

export { RecentBoardGameModel };
