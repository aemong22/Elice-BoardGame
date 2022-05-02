import { favoriteAuthService } from "../services/favoriteService";
import is from "@sindresorhus/is";

class favoriteController {
    static async addFavorite(req, res, next) {
        try {
            const userId = req.body.userId;
            const boardgameId = req.body.boardgameId;

            const favorite = await favoriteAuthService.addFavorite({
                userId,
                boardgameId,
            });

            res.status(200).json(favorite);
        } catch (error) {
            next(error);
        }
    }

    static async getFavorites(req, res, next) {
        try {
            const id = req.params.id;

            const favorites = await favoriteAuthService.findFavorite({
                userId: id,
            });

            res.status(200).json(favorites);
        } catch (error) {
            next(error);
        }
    }
}

export { favoriteController };
