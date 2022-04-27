import { BoardGameModel } from "../schemas/boardgame";
import { BoardGameModel2020 } from "../schemas/boardGame2020";

class Boardame {
    static async findAllBoardGames() {
        // 모든 보드게임 검색 - 저장된 순서대로 나옴
        const boardgames = await BoardGameModel.find({});
        return boardgames;
    }

    static async insert({ item }) {
        // insert 시에만 사용
        const userToken = await BoardGameModel2020.create(item);
        return userToken;
    }

    static async findByPlayer({ player, sortType }) {
        switch (sortType) {
            case "":
                //
                break;

            default:
                break;
        }

        const findByPlayer = await BoardGameModel.find({
            minPlayer: { $gte: player },
        }).sort({ rank: -1 });
        return findByPlayer;
    }

    static async findByCondition({ category, sortType }) {
        const games = await BoardGameModel.find({});
    }
}

export { Boardame };
