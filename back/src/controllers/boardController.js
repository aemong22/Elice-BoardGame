import { boardService } from "../services/boardService";

class boardServiceController{
    static async findAllContents(req, res, next){
        try {
            const allContents = await boardService.getContents();
            res.status(200).json(allContents);
        } catch (error) {
            next(error);
        }
    }

    static async getBoard(req, res, next){
        try {
            const contentid = req.params.id;
            const getboard = await boardService.getContent({contentid});
            res.status(200).json(getboard);
        } catch (error) {
            next(error);
        }
    }

    static async deleteBoard(req, res, next){
        try {
            const contentid = req.params.id;
            const deleteboard = await boardService.deleteContent({contentid});
            res.status(200).json(deleteboard);
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
            const newContent = await boardService.addContent({
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


    // 대글 관련 newComment
    static async newComment(req, res, next){
        try {
            const user_id = req.body.user_id;
            const content = req.body.content;
            const newComment = await boardService.addComment({
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
            const deletecomment = await boardService.deleteComment({conmmentid});
            res.status(200).json(deletecomment);
            console.log("게시물이 삭제되었습니다.")
        } catch (error) {
            next(error);
        }
    }
}

export {boardServiceController}