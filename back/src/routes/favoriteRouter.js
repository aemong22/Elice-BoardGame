import { Router } from "express";

// refresh는 남겨두기
import { refresh } from "../utils/refresh";
import { authJWT } from "../middlewares/authJWT";

import { favoriteController } from "../controllers/favoriteController";

const favoriteAuthRouter = Router();

favoriteAuthRouter.put("/favorite", authJWT, favoriteController.addFavorite);

favoriteAuthRouter.get(
    "/favorite/user",
    authJWT,
    favoriteController.getFavorites
);

favoriteAuthRouter.get(
    "/favorite/boardgame",
    authJWT,
    favoriteController.getDetailFavorite
);

export { favoriteAuthRouter };
