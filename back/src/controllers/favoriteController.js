import { favoriteAuthService } from "../services/favoriteService";
import is from "@sindresorhus/is";

class favoriteController {
    static async addFavorite(req, res, next) {
        try {
            const userId = req.currentUserId;
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
            const id = req.currentUserId;

            const favorites = await favoriteAuthService.findFavorite({
                userId: id,
            });

            res.status(200).json(favorites);
        } catch (error) {
            next(error);
        }
    }

    //찜한 목록 가져오기 - 디테일 부분
    static async getDetailFavorite(req, res, next) {
        try {
            const userId = req.currentUserId;
            const boardgameId = req.body.boardgameId;

            const favorite = await favoriteAuthService.findDetailFavorite({
                userId,
                boardgameId,
            });

            res.status(200).json(favorite);
        } catch (error) {
            next(error);
        }
    }
}

export { favoriteController };
