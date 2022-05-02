import { Router } from "express";

// refresh는 남겨두기
import { refresh } from "../utils/refresh";
import { authJWT } from "../middlewares/authJWT";

import { favoriteController } from "../controllers/favoriteController";

const favoriteAuthRouter = Router();

favoriteAuthRouter.post("/favorite", favoriteController.addFavorite);

favoriteAuthRouter.get(
    "/favorite/:id",

    favoriteController.getFavorites
);

export { favoriteAuthRouter };
