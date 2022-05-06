import { Router } from "express";
import { authJWT } from "../middlewares/authJWT";

// 이후에 추가할 것
import { boardgameController } from "../controllers/boardGameController";

const boardGameRouter = Router();
// board game 라우팅도 authJWT는 추가할 것 - 현재는 테스트를 위해 추가하지 않음

// 19년도 데이터 game_id 기준 조회: 상세 페이지
boardGameRouter.get(
    "/boardgame/detail/:id",
    authJWT,
    boardgameController.findByGameId
);

// --------보드게임 상세 조회---------

// condition with params
boardGameRouter.get(
    "/games/conditions",
    authJWT,
    boardgameController.findByCondition
);
// random 게임
boardGameRouter.get("/randomgame", authJWT, boardgameController.randomGame);

// 페이지 전체 검색
boardGameRouter.get("/search", authJWT, boardgameController.search);

export { boardGameRouter };
