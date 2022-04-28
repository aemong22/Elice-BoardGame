import { boardGameService } from "../services/boardGameService";
import fs from "fs";
class boardgameController {
    // 19년도 게임 전체 조회
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
            const recentlyGames = await boardGameService.findRecentlyGames();
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

    static async findCondition(req, res, next) {
        const { player, age, theme, time, complexity, type } = req.body;
        let games = null;

        if (player !== "") {
            // 인원수에 따른 조회
            games = await boardGameService.findByPlayer({
                player: parseInt(player),
                type,
            });
        } else if (age !== "") {
            // 연령에 따른 조회
            games = await boardGameService.findByAge({
                age: parseInt(age),
                type,
            });
        } else if (theme !== "") {
            // 테마에 따른 조회
            games = await boardGameService.findByTheme({ theme, type });
        } else if (time !== "") {
            // 게임 시간에 따른 조회
            games = await boardGameService.findByTime({
                time: parseInt(time),
                type,
            });
        } else if (complexity !== "") {
            // 난이도에 따른 조회
            games = await boardGameService.findByComplexity({
                complexity: parseFloat(complexity),
                type,
            });
        }

        res.status(200).json(games);
    }
}

export { boardgameController };
