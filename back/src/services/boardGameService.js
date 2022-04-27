import { Boardame } from "../db";

class boardGameService {
    static async getAllBoardGames() {
        const boardGames = await Boardame.findAllBoardGames();
        return boardGames;
    }

    static async getGameByPlayer({ player }) {
        const games = await Boardame.findByPlayer({ player });
        return games;
    }

    static async getGameByCondition({ category, sortType }) {
        // 인원수 player
        // 연령 age
        // 테마 theme
        // 게임시간 time
        // 난이도 complexity

        // 랭킹 ranking
        // 리뷰 review
        // 평점 rating
        // category.category,  category.value
        switch (category.category) {
            case "player":
                const games = await Boardame.findByPlayer({
                    player: category.value,
                    sortType,
                });
                break;
            case "age":
                break;
            case "theme":
                break;
            case "time":
                break;
            case "complexity":
                break;
            case null:
                break;
            default:
                break;
        }
    }

    static async findCondition({}) {
        const games = 0;
    }
}

export { boardGameService };
