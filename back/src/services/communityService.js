import { CommunityContentModel } from "../db/schemas/communitycontents";
import { CommunityCommentModel } from "../db/schemas/communitycomment";


class communityService{
    // content 만들기
    static async addContent({author,title,content}){
        const comment = [];
        const newContent = {
            author,
            title,
            content,
            comment
            };

        const createNewContents = await CommunityContentModel.create(newContent)
        createNewContents.errorMessage = null;
        
        return createNewContents;
    }

    // content수정하기
    static async updateContent({contentid,content}){
        const filter = {_id : contentid}
        const updatecontent = {content : content};

        const UpdateContents = await CommunityContentModel.findOneAndUpdate(
            filter,
            updatecontent
        )
        UpdateContents.errorMessage = null;
        
        return UpdateContents;
    }


    // 모든 content 보여주기
    static async getContents(){
        const AllContents = await CommunityContentModel.find({});
        return AllContents;
    }

    static async getContent({ contentid }){
        const getContent = await CommunityContentModel.findById(contentid);
        return getContent;
    }

  
    // content 삭제하기
    static async deleteContent({ contentid }){
        const getContent = await CommunityContentModel.findByIdAndDelete(contentid);
        return getContent;
    }
    
    // comment 추가하기
    static async addComment({user_id,content}){
        const newComment = {
            user_id,
            comment
            };
        const createNewComment = await CommunityCommentModel.create(newComment)
        createNewComment.errorMessage = null;
        
        return createNewComment;
    }

    // comment 삭제하기
    static async deleteComment({commentid}){
        const delComment = await CommunityCommentModel.findByIdAndDelete({id : commentid});
        return delComment;
    }

}

export {communityService}