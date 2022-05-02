import { BoardContentModel } from "../db/schemas/boardcontents";
import { BoardCommentModel } from "../db/schemas/boardcomment";


class boardService{
    // content 만들기
    static async addContent({author,title,content}){
        const comment = [];
        const newContent = {
            author,
            title,
            content,
            comment
            };

        const createNewContents = await BoardContentModel.create(newContent)
        createNewContents.errorMessage = null;
        
        return createNewContents;
    }

    // 모든 content 보여주기
    static async getContents(){
        const AllContents = await BoardContentModel.find({});
        return AllContents;
    }

    static async getContent({ contentid }){
        const getContent = await BoardContentModel.findById(contentid);
        return getContent;
    }

    // content 삭제하기
    static async deleteContent({ contentid }){
        const getContent = await BoardContentModel.findByIdAndDelete(contentid);
        return getContent;
    }
    
    // comment 추가하기
    static async addComment({user_id,content}){
        const newComment = {
            user_id,
            comment
            };
        const createNewComment = await BoardCommentModel.create(newComment)
        createNewComment.errorMessage = null;
        
        return createNewComment;
    }

    // comment 삭제하기
    static async deleteComment({commentid}){
        const delComment = await BoardCommentModel.findByIdAndDelete({id : commentid});
        return delComment;
    }

}

export {boardService}