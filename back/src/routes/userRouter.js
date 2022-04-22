import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { userAuthService } from "../services/userService";
import { refresh } from "../utils/refresh";
import { authJWT } from "../middlewares/authJWT";
import { User } from "../db";

const userAuthRouter = Router();

// 회원가입
userAuthRouter.post("/user/register", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    const user_name = req.body.user_name;
    const email = req.body.email;
    const password = req.body.password;
    const phone_number = req.body.phone_number;

    const createdUser = await userAuthService.addUser({
      user_name,
      email,
      password,
      phone_number,
    });

    if (createdUser.errorMessage) {
      throw new Error(createdUser.errorMessage);
    }

    res.status(200).json(createdUser);
  } catch (error) {
    next(error);
  }
});

// 모든 회원 정보 가져오기
userAuthRouter.get("/userlist", async (req, res, next) => {
  try {
    const users = await userAuthService.getUsers();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

userAuthRouter.post("/user/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userAuthService.getSingleUser({ email, password });

    if (user.errorMessage) {
      throw new Error(user.errorMessage);
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

userAuthRouter.get("/user/:id", authJWT, async (req, res) => {
  // id로 검색
  try {
    const _id = req.params.id;
    const user = await userAuthService.getUserInfo({ _id });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

userAuthRouter.get("/user/current", authJWT, (req, res) => {
  // 내 정보 보기
});

userAuthRouter.get("/token/refresh", refresh);

export { userAuthRouter };
