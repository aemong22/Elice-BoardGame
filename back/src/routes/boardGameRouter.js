import { boardGameService } from "../services/boardGameService";
import { Router } from "express";

const boardGameRouter = Router();

boardGameRouter.get("/boardGames", async (req, res, next) => {
  try {
    const allBoardGame = await boardGameService.getAllBoardGames();
    res.status(200).json(allBoardGame);
  } catch (error) {
    next(error);
  }
});

export { boardGameRouter };
