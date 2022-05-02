import bcrypt from "bcrypt";
import { sign, refresh } from "../utils/jwt-utils";
import { FavoriteModel } from "../db/schemas/favorite";
import { UserModel } from "../db/schemas/user";
import { BoardGameModel } from "../db/schemas/boardgame";

class favoriteAuthService {
    static async addFavorite({ email, boardgame }) {
        const user = await UserModel.findOne({ email });
        const game = await BoardGameModel.findOne({ boardgame });

        if (!user) {
            const errorMessage = "해당 메일은 가입 내역이 없습니다.";
            return { errorMessage };
        }

        if (!game) {
            const errorMessage = "해당 보드게임은 존재하지 않습니다.";
            return { errorMessage };
        }

        const favorite = await FavoriteModel.create({
            user: email,
            boardgame: game._id,
        });

        return favorite;
    }
}

export { favoriteAuthService };
