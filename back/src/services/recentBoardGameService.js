import { BoardGameModel2020 } from "../db/schemas/boardgame2020";

class recentBoardGameService {
    static findAllRecentGames() {
        const games = BoardGameModel2020.find({});
        return games;
    }
}

export { recentBoardGameService };
