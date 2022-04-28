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

    // --------프론트에서 테스트를 위한 코드-------
    // 인원수 기준 검색
    // 프론트 테스트용
    // min_player <= player <= max_player
    static async findByPlayer(req, res, next) {
        try {
            const player = req.params.player;
            const games = await boardGameService.findByPlayer({ player });
            res.status(200).json(games);
        } catch (error) {
            next(error);
        }
    }

    // 최소 인원수 이상 조회
    static async findByMinPlayer(req, res, next) {
        try {
            const player = req.params.player;
            const gameByminPlayer = await boardGameService.minPlayerCond({
                player,
            });
            res.status(200).json(gameByminPlayer);
        } catch (error) {
            next(error);
        }
    }

    // 수정 중
    static async findByCondition(req, res, next) {
        try {
        } catch (error) {}
    }
}

export { boardgameController };
