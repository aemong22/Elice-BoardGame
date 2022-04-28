import { BoardGameModel } from "../db/schemas/boardgame";

class boardGameService {
    // service에서 바로 요청
    static async findAllGames() {
        // 모든 보드게임 검색 - 저장된 순서대로 나옴
        const boardgames = await BoardGameModel.find({});
        return boardgames;
    }

    // 최신 게임 전체 조회
    static async findRecentlyGames() {
        const boardGames = await BoardGameModel2020.find({});
        return boardGames;
    }

    // game_id로 조회
    static async findByGameId({ gameId }) {
        const games = await BoardGameModel.findOne({ game_id: gameId });
        return games;
    }

    // 최소 인원 이상 조회
    static minPlayerCond({ player }) {
        const minPlayer = BoardGameModel.find({
            min_player: { $gte: player },
        });
        return minPlayer;
    }

    // 최대 인원 이하 조회
    static maxPlayerCond({ player }) {
        const maxPlayer = BoardGameModel.find({
            max_player: { $lte: player },
        });
        return maxPlayer;
    }

    // 선택한 인원 수 범위 지정, 교집합 반환 - test 중
    static async findByPlayer({ player }) {
        const minPlayer = await this.minPlayerCond(player);
        const maxPlayer = await this.maxPlayerCond(player);

        console.log(minPlayer);
        const games = await BoardGameModel.aggregate({
            $setIntersection: [minPlayer, maxPlayer],
        });
        return games;
    }

    // 수정 중
    static async findByCondition() {
        // const games =
    }
}

export { boardGameService };
