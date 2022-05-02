import { favoriteAuthService } from "../services/favoriteService";
import is from "@sindresorhus/is";

class favoriteController {
    static async addFavorite(req, res, next) {
        try {
            const email = req.body.email;
            const boardgame = req.body.boardgame;

            const favorite = await favoriteAuthService.addFavorite({
                email,
                boardgame,
            });

            res.status(200).json(favorite);
        } catch (error) {
            next(error);
        }
    }
}

export { favoriteController };
