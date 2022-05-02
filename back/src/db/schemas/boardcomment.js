import { Schema, model } from "mongoose";

const BoardCommentSchema = new Schema(
    {
        // content 내용
        content : {
            type : String,
            required : true,
        },
        // 사용자 id
        user_id : {
            type : String,
            required: true,
        },
        // comment내용
        
    }, 
    {      
        timestamps :  true,
    }
);

const BoardCommentModel = model("BoardComment",BoardCommentSchema);
export {BoardCommentModel};