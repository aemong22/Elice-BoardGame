import { BoardGameModel } from "../db/schemas/boardgame";

class boardGameService {
    // service에서 바로 요청
    static async findAllGames() {
        // 모든 보드게임 검색 - 저장된 순서대로 나옴
        const boardgames = await BoardGameModel.find({});
        return boardgames;
    }

    static async findRecentlyGames() {
        const boardGames = await BoardGameModel2020.find({});
        return boardGames;
    }

    static async findByCondition() {
        // const games =
    }
}

export { boardGameService };
