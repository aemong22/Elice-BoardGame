import is from "@sindresorhus/is";
import { Router } from "express";
import { userAuthService } from "../services/userService";
import { refresh } from "../utils/refresh";
import { authJWT } from "../middlewares/authJWT";
import nodemailer from "nodemailer";
import config from "../config";

import { insertData } from "../mock";

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
    console.log("들어왔다!");
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

//비밀번호 찾기 API
userAuthRouter.post("/user/reset_password", async (req, res, next) => {
  try {
    const email = req.body.email;
    console.log(email);
    const generatedAuthNumber = Math.floor(Math.random() * 10 ** 8)
      .toString()
      .padStart(8, "0");

    const toUpdate = { password: generatedAuthNumber };
    const resetPassword = await userAuthService.setPassword({
      email,
      toUpdate,
    });

    if (resetPassword.errorMessage) {
      throw new Error(resetPassword.errorMessage);
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: `${config.NODEMAILER_USER}`,
        pass: `${config.NODEMAILER_PASS}`,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"nuri" <${process.env.NODEMAILER_USER}>`,
      to: email,
      subject: "비밀번호 변경입니다",
      text: generatedAuthNumber,
      html: `<b>변경된 비밀번호 입니다.<br/>${generatedAuthNumber}</b>`,
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    res.status(200).json({
      status: "Success",
      code: 200,
      message: "Sent Auth Email",
    });
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

userAuthRouter.get("/dataset", insertData);
export { userAuthRouter };
