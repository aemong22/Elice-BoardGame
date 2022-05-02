import { Schema, model } from "mongoose";

const BoardContentSchema = new Schema(
    {
        // content 제목
        title : {
            type : String,
            required : true,
        },
        // content 내용
        content : {
            type : String,
            required : true,
        },
        // content 작성자
        author : {
            type : String,
            required: true,
        },
        // comment 한 개시글에 여러개 연결›
        // 배열로 설정하는데 다른스키마와 연결시켜 작성자를 제공해주어야한다.
        comment :
            [{type : Schema.Types.ObjectId, ref : "BoardComment"}],
        
    }, 
    {      
        timestamps :  true,
    }
);

const BoardContentModel = model("BoardContent",BoardContentSchema);
export {BoardContentModel};