import { Schema, model } from "mongoose";

const CommunityCommentSchema = new Schema(
    {
        // content 내용
        content: {
            type: String,
            required: true,
        },
        // 사용자 id
        user_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        // comment내용
    },
    {
        timestamps: true,
    }
);

const CommunityCommentModel = model("CommunityComment", CommunityCommentSchema);
export { CommunityCommentModel };
