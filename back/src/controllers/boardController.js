import { boardService } from "../services/boardService";

class boardServiceController{
    static async findAllContents(req, res, next){
        try {
            const allContents = await boardService.getContents();
            res.status(200).json(allcontents);
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
}

export {boardServiceController}