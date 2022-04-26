import { BoardGameModel } from "../schemas/boardgame";
class Boardame {
    static async findAllBoardGames() {
        // 모든 보드게임 검색 - 저장된 순서대로 나옴
        const boardgames = await BoardGameModel.find({});
        return boardgames;
    }

    static async findByPlayer({ player }) {
        const findByPlayer = await BoardGameModel.find({
            minPlayer: { $gte: player },
        });
        return findByPlayer;
    }
}

export { Boardame };
