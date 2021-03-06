import { Schema, model } from "mongoose";

const BoardGameSchema = new Schema(
    {
        index: {
            type: Number,
            required: true,
        },
        un_named: {
            type: Number,
            required: true,
        },
        game_id: {
            type: Number,
            unique: true,
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
        wordcloud: {
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
        theme: {
            type: [String],
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
        recommend_id: {
            type: [Number],
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const BoardGameModel = model("boardgames", BoardGameSchema);

export { BoardGameModel };
