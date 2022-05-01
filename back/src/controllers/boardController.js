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

export {boardServiceController}