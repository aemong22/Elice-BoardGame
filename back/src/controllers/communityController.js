import { communityService } from "../services/communityService";

class communityServiceController{
    static async findAllContents(req, res, next){
        try {
            const allContents = await communityService.getContents();
            res.status(200).json(allContents);
        } catch (error) {
            next(error);
        }
    }

    static async getCommunity(req, res, next){
        try {
            const contentid = req.params.id;
            const getcommunity = await communityService.getContent({contentid});
            res.status(200).json(getcommunity);
        } catch (error) {
            next(error);
        }
    }

    static async deleteCommunity(req, res, next){
        try {
            const contentid = req.params.id;
            const deletecommunity = await communityService.deleteContent({contentid});
            res.status(200).json(deletecommunity);
            console.log("게시물이 삭제되었습니다.")
        } catch (error) {
            next(error);
        }
    }

    static async createContents(req, res, next){
        try {
            const author = req.currentUserId;
            const title = req.body.title;
            const content = req.body.content;
            const newContent = await communityService.addContent({
                author,
                title,
                content,
            });
            if (newContent.errorMessage) {
                throw new Error(newContent.errorMessage);
            }
            res.status(200).json(newContent);
        } catch (error) {
            next(error);
        }
    }

    static async updateContent(req,res,next){
        try{
            const title = req.body.title;
            const content = req.body.content;
            const id = req.params.id;
            const update = {title,content}

            const updateContent = await communityService.updateContent({
                id,
                update,
            });

        if (updateContent.errorMessage) {
                throw new Error(updateContent.errorMessage);
            }
        res.status(200).json()
        }
        catch(error){
            next(error);
        }
    }

    // 대글 관련 newComment
    static async newComment(req, res, next){
        try {
            const id = req.params.id;
            const user_id = req.currentUserId;
            const content = req.body.content;
            const newComment = await communityService.addComment({
                id,
                user_id,
                content,
            });
            
            if (newComment.errorMessage) {
                throw new Error(newComment.errorMessage);
            }
            res.status(200).json(newComment);

        } catch (error) {
            next(error);
        }
    }
    // comment삭제
    static async deleteComment(req, res, next){
        try {
            const cotentid = req.params.id;
            const commentid = req.params.id2;
            console.log("1 "+cotentid)
            const deletecomment = await communityService.deleteComment({cotentid,commentid});
            res.status(200).json(deletecomment);
        } catch (error) {
            next(error);
        }
    }

    // comment 수정하기
    static async updateComment(req,res,next){
        try{
            const content = req.body.content;
            const id = req.params.id2;

            const updateComments = await communityService.updateComment({
                id,
                content,
            });

        if (updateComments.errorMessage) {
                throw new Error(updateComments.errorMessage);
            }
        res.status(200).json(updateComments)
        }
        catch(error){
            next(error);
        }
    }
}

export {communityServiceController}