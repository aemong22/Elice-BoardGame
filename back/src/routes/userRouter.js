import { Router } from "express";

import jwt from "../utils/jwt-utils";
import { redisClient } from "../utils/redis";
import { authJWT } from "../middlewares/authJWT";

const userRouter = Router();

userRouter.post("/login", (req, res, next) => {
  if (success) {
    const accessToken = jwt.sign(user);
    const refreshToken = jwt.refresh();

    redisClient.set(user._id, refreshToken);

    res.status(200).json({
      ok: true,
      data: {
        accessToken,
        refreshToken,
      },
    });
  } else {
    res.status(401).json({
      ok: false,
      message: "password is incorrect",
    });
  }
});

userRouter.get("/userInfo", authJWT, (req, res, next) => {});

export { userRouter };
