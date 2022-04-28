import { Router } from "express";
// 이후에 추가할 것
import { boardgameController } from "../controllers/boardGameController";

const boardGameRouter = Router();
// board game 라우팅도 authJWT는 추가할 것 - 현재는 테스트를 위해 추가하지 않음

boardGameRouter.get("/boardGames", boardgameController.findAllGames);

boardGameRouter.get("/recentlyGames", boardgameController.findRecentlyGames);

boardGameRouter.get("/condition", boardgameController.findByCondition);

boardGameRouter.post("/insertData", boardgameController.insertData);

export { boardGameRouter };
