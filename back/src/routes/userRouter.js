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

userAuthRouter.get("/user/:id", authJWT, async (req, res, next) => {
  // 사용자를 id로 검색
  try {
    const _id = req.params.id;
    const user = await userAuthService.getUserInfo({ _id });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

userAuthRouter.get("/currentUser", authJWT, async (req, res, next) => {
  // 내 정보 보기
  try {
    // jwt토큰에서 추출된 사용자 id를 가지고 db에서 사용자 정보를 찾음.
    const _id = req.currentUserId;
    console.log(_id);
    const currentUserInfo = await userAuthService.getUserInfo({
      _id,
    });

    if (currentUserInfo.errorMessage) {
      throw new Error(currentUserInfo.errorMessage);
    }

    res.status(200).json(currentUserInfo);
  } catch (error) {
    next(error);
  }
});

userAuthRouter.get("/token/refresh", refresh);

export { userAuthRouter };
