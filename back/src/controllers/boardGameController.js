import { boardGameService } from "../services/boardGameService";

class boardgameController {
    // game_id를 기준으로 19년도 보드게임 데이터 탐색
    static async findByGameId(req, res, next) {
        try {
            const user = req.currentUserId;
            const gameId = req.params.id;
            const { games, recommend_ids } =
                await boardGameService.findByGameId({ user, gameId });

            if (games.errorMessage) {
                throw new Error(games.errorMessage);
            }

            res.status(200).json({ games, recommendGames: recommend_ids });
        } catch (error) {
            next(error);
        }
    }

    // --------- 보드게임 조건에 따른 조회 -----------

    // 인원수 기준 검색
    // 플레이어 수 범위안에 있는 보드게임 조회
    static async findByCondition(req, res, next) {
        const user = req.currentUserId;

        const {
            category = null,
            sortType = null,
            page = 1,
            perPage = 10,
            val1: categoryValue = null,
        } = req.query;

        let games = null;

        try {
            switch (category) {
                case "player":
                    games = await boardGameService.findByPlayer({
                        user,
                        playerCount: parseInt(categoryValue),
                        sortType,
                        page,
                        perPage,
                    });
                    break;
                case "age":
                    games = await boardGameService.findByAge({
                        user,
                        age: parseInt(categoryValue),
                        sortType,
                        page,
                        perPage,
                    });
                    break;
                case "theme":
                    games = await boardGameService.findByTheme({
                        user,
                        theme: categoryValue,
                        sortType,
                        page,
                        perPage,
                    });
                    break;
                case "time":
                    games = await boardGameService.findByTime({
                        user,
                        time: parseInt(categoryValue),
                        sortType,
                        page,
                        perPage,
                    });
                    break;
                case "complexity":
                    games = await boardGameService.findByComplexity({
                        user,
                        complexity: parseFloat(categoryValue),
                        sortType,
                        page,
                        perPage,
                    });
                    break;
                default:
                    games = await boardGameService.findByRecentlyGames({
                        user,
                        sortType,
                        page,
                        perPage,
                    });
                    break;
            }

            if (games.errorMessage) {
                throw new Error(games.errorMessage);
            }

            res.status(200).json(games);
        } catch (error) {
            next(error);
        }
    }

    static async search(req, res, next) {
        const user = req.currentUserId;
        const { keyword, page, perPage } = req.query;

        try {
            const { totalPage, games, errorMessage } =
                await boardGameService.search({
                    user,
                    keyword,
                    page,
                    perPage,
                });

            if (errorMessage) throw new Error(errorMessage);

            res.status(200).json({ totalPage, games });
        } catch (error) {
            next(error);
        }
    }

    // random boardgame
    static async randomGame(req, res, next) {
        try {
            // 0~467
            const index = Math.floor(Math.random() * 467);
            const game = await boardGameService.randomBoardGame({ index });
            res.status(200).json(game);
        } catch (error) {
            next(error);
        }
    }
}

export { boardgameController };
