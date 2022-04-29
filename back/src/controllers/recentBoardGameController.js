import { recentBoardGameService } from "../services/recentBoardGameService";

class recentBoardGameController {
    static async findAllGames(req, res, next) {
        try {
            const games = await recentBoardGameService.findAllRecentGames();
            res.status(200).json(games);
        } catch (error) {
            next(error);
        }
    }
}

export { recentBoardGameController };
