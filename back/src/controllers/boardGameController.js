import { boardGameService } from "../services/boardGameService";

class boardgameController {
    static async findAllGames(req, res, next) {
        try {
            const allBoardGame = await boardGameService.getAllBoardGames();
            res.status(200).json(allBoardGame);
        } catch (error) {
            next(error);
        }
    }

    static async findRecentlyGames(req, res, next) {
        try {
            const recentlyGames = await boardGameService.findRecentlyGames();
            res.status(200).json(recentlyGames);
        } catch (error) {
            next(error);
        }
    }

    static async findByCondition(req, res, next) {
        try {
        } catch (error) {}
    }
}

export { boardgameController };
