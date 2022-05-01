import { boardGameService } from "../services/boardGameService";
import fs from "fs";
class boardgameController {
    // 19년도 게임 전체 조회 (search 에서 사용할 것 구현)
    static async findAllGames(req, res, next) {
        try {
            const allBoardGame = await boardGameService.findAllGames();
            res.status(200).json(allBoardGame);
        } catch (error) {
            next(error);
        }
    }

    // 20년 최신 게임 전체 조회
    static async findRecentlyGames(req, res, next) {
        try {
            const recentlyGames = await boardGameService.findByRecentlyGames();
            res.status(200).json(recentlyGames);
        } catch (error) {
            next(error);
        }
    }

    // game_id를 기준으로 19년도 보드게임 데이터 탐색
    static async findByGameId(req, res, next) {
        try {
            const gameId = req.params.id;
            const games = await boardGameService.findByGameId({ gameId });
            res.status(200).json(games);
        } catch (error) {
            next(error);
        }
    }

    // --------- 보드게임 조건에 따른 조회 -----------

    // 인원수 기준 검색
    // 플레이어 수 범위안에 있는 보드게임 조회
    static async findByCondition(req, res, next) {
        // query string으로
        const category = req.query.category || null;
        const categoryValue = req.query.val1 || null;
        const type = req.query.type || null;
        const page = req.query.page || 1;
        const perPage = req.query.perPage || 10;

        let games = null;

        switch (category) {
            case "player":
                games = await boardGameService.findByPlayer({
                    playerCount: parseInt(categoryValue),
                    type,
                    page,
                    perPage,
                });
                break;
            case "age":
                games = await boardGameService.findByAge({
                    age: parseInt(categoryValue),
                    type,
                    page,
                    perPage,
                });
                break;
            case "theme":
                games = await boardGameService.findByTheme({
                    categoryValue,
                    type,
                    page,
                    perPage,
                });
                break;
            case "time":
                games = await boardGameService.findByTime({
                    time: parseInt(categoryValue),
                    type,
                    page,
                    perPage,
                });
                break;
            case "complexity":
                games = await boardGameService.findByComplexity({
                    complexity: parseFloat(categoryValue),
                    type,
                    page,
                    perPage,
                });
                break;
            default:
                games = await boardGameService.findAllGames({ page, perPage });
                break;
        }
        res.status(200).json(games);
    }
}

export { boardgameController };
