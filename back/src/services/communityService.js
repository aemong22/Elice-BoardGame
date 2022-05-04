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
    static async updateContent({id,update}){
        const filter = {_id : id};
        const option = {returnOriginal:false};
        const fieldUpdate="title";
        const updatetitle = update.title;
        let updates = {[fieldUpdate]: updatetitle}
        let UpdateContents = await CommunityContentModel.findOneAndUpdate(
            filter,
            updates,
            option,
        )

        const fieldUpdates="content";
        const updatecontent = update.content;
        updates = {[fieldUpdates] : updatecontent}
        UpdateContents = await CommunityContentModel.findOneAndUpdate(
            filter,
            updates,
            option,
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
    static async addComment({id,user_id,content}){
        const newComment = {
            user_id: user_id,
            content: content,
            };
        // const createNewComment = await CommunityContentModel.update({_id:id},{comment : newComment})
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