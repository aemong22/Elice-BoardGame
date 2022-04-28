import { Router } from "express";
// 이후에 추가할 것
import { boardgameController } from "../controllers/boardGameController";
import { recentBoardGameController } from "../controllers/recentBoardGameController";

const boardGameRouter = Router();
// board game 라우팅도 authJWT는 추가할 것 - 현재는 테스트를 위해 추가하지 않음

// 19년도 전체 게임 조회
boardGameRouter.get("/boardGames", boardgameController.findAllGames);
// 20년도 최신 게임 조회
boardGameRouter.get("/recentlyGames", recentBoardGameController.findAllGames);
// 19년도 데이터 game_id 기준 조회: 상세 페이지
boardGameRouter.get("/gameInfo/:id", boardgameController.findByGameId);

// 프론트 테스트용
// 인원수에 따른 조회
boardGameRouter.get("/games/player/:num", boardgameController.findByPlayer);
// 연령대에 따른 조회
boardGameRouter.get("/games/age/:num", boardgameController.findByAge);

// 수정 중
boardGameRouter.get("/condition", boardgameController.findByCondition);

export { boardGameRouter };
