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
            const author = req.body.author;
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
            const updatecontent = req.body.content;
            const contentid = req.params.id;

            const updateContent = await communityService.updateContent({
                updatecontent,
                contentid,
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
            const user_id = req.body.user_id;
            const content = req.body.content;
            const newComment = await communityService.addComment({
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
            const conmmentid = req.params.id2;
            const deletecomment = await communityService.deleteComment({conmmentid});
            res.status(200).json(deletecomment);
            console.log("게시물이 삭제되었습니다.")
        } catch (error) {
            next(error);
        }
    }
}

export {communityServiceController}