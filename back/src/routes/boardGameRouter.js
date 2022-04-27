import { boardGameService } from "../services/boardGameService";
import { Router } from "express";
import { insertData } from "../mock";

const boardGameRouter = Router();
// board game 라우팅도 authJWT는 추가할 것 - 현재는 테스트를 위해 추가하지 않음

boardGameRouter.get("/boardGames", async (req, res, next) => {
    try {
        const allBoardGame = await boardGameService.getAllBoardGames();
        res.status(200).json(allBoardGame);
    } catch (error) {
        next(error);
    }
});

// boardGameRouter.get("/games/player/:nums", async (req, res, next) => {
//     try {
//         const player = req.params.nums;
//         const gameByPlayer = await boardGameService.getGameByPlayer({ player });

//         res.status(200).json(gameByPlayer);
//     } catch (error) {
//         next(error);
//     }
// });

// 카테고리, 정렬로 보드게임 목록 가져오기
boardGameRouter.post("/games/category/sort", async (req, res, next) => {
    const { category, sortType } = req.body;
});

boardGameRouter.get("/insertGames", insertData);

boardGameRouter.get("/condition", async (req, res, next) => {
    const getGame = 9;
});

export { boardGameRouter };
