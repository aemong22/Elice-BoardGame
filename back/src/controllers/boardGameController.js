import { boardGameService } from "../services/boardGameService";

class boardgameController {
    // game_id를 기준으로 19년도 보드게임 데이터 탐색
    static async findByGameId(req, res, next) {
        try {
            const gameId = req.params.id;
            const { games, recommend_ids } =
                await boardGameService.findByGameId({ gameId });

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
        // query string으로
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
                        playerCount: parseInt(categoryValue),
                        sortType,
                        page,
                        perPage,
                    });
                    break;
                case "age":
                    games = await boardGameService.findByAge({
                        age: parseInt(categoryValue),
                        sortType,
                        page,
                        perPage,
                    });
                    break;
                case "theme":
                    games = await boardGameService.findByTheme({
                        theme: categoryValue,
                        sortType,
                        page,
                        perPage,
                    });
                    break;
                case "time":
                    games = await boardGameService.findByTime({
                        time: parseInt(categoryValue),
                        sortType,
                        page,
                        perPage,
                    });
                    break;
                case "complexity":
                    games = await boardGameService.findByComplexity({
                        complexity: parseFloat(categoryValue),
                        sortType,
                        page,
                        perPage,
                    });
                    break;
                default:
                    games = await boardGameService.findByRecentlyGames({
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
        const { keyword, page, perPage } = req.query;

        try {
            const { totalPage, games, errorMessage } =
                await boardGameService.search({
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
}

export { boardgameController };
