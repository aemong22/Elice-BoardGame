import is from "@sindresorhus/is";
import { Router } from "express";
import config from "../config";
import { login_required } from "../middlewares/login_required";
import { userAuthService } from "../services/userService";
import nodemailer from "nodemailer";

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

//비밀번호 찾기 API
userAuthRouter.post("/user/reset_password", async (req, res, next) => {
    try {
        const user_name = req.body.user_name;

        const generatedAuthNumber = Math.floor(Math.random() * 10 ** 8)
            .toString()
            .padStart(8, "0");

        const toUpdate = { password: generatedAuthNumber };
        const resetPassword = await userAuthService.setPassword({
            user_name,
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
            to: resetPassword.email,
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

export { userAuthRouter };
