import { BoardGameModel } from "../db/schemas/boardgame";
import {
    rankSort,
    raitngSort,
    userRatedSort,
} from "./sortFuncion/sortFunction";

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

    // 정렬 type 설정
    static sortType({ type }) {
        switch (type) {
            case "rank":
                return rankSort;
            case "rating":
                return raitngSort;
            case "userRated":
                return userRatedSort;
            default:
                return null;
        }
    }

    // player 기준 범위 안 보드게임 조회
    static async findByPlayer({ player, type }) {
        const games = await BoardGameModel.find({
            $nor: [
                { min_player: { $gt: player } },
                { max_player: { $lt: player } },
            ],
            // sort안에서 랭킹순, 등등..
        }).sort(this.sortType({ type }));
        return games;
    }

    // 연령별 기준 보드게임 조회
    static async findByAge({ age }) {
        const games = await BoardGameModel.find({
            min_age: { $lte: age },
        }).sort(this.sortType({ type }));
        return games;
    }

    // 수정 중
    static async findByCondition() {
        // const games =
    }
}

export { boardGameService };
