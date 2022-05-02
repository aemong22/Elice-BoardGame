import { userAuthService } from "../services/userService";
import is from "@sindresorhus/is";
import nodemailer from "nodemailer";
import axios from "axios";

class userController {
    static async userRegister(req, res, next) {
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

            const { user, errorMessage } = await userAuthService.addUser({
                user_name,
                email,
                password,
                phone_number,
            });

            if (errorMessage) {
                throw new Error(errorMessage);
            }

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    static async findAllUser(req, res, next) {
        try {
            const users = await userAuthService.getUsers();

            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }

    static async userLogin(req, res, next) {
        try {
            const { email, password } = req.body;

            const user = await userAuthService.getUser({
                email,
                password,
            });

            if (user.errorMessage) {
                throw new Error(user.errorMessage);
            }

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    static async findUserById(req, res, next) {
        // 사용자를 id로 검색
        try {
            const _id = req.params.id;
            const user = await userAuthService.getUserInfo({ _id });
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    //비밀번호'만' 변경하는 controller
    static async resetPassword(req, res, next) {
        try {
            const resetToken = req.body.resetToken;
            const newPassword = req.body.password;

            const toUpdate = { newPassword };
            const { user, errorMessage } = await userAuthService.setPassword({
                resetToken,
                toUpdate,
            });

            if (errorMessage) {
                throw new Error(errorMessage);
            }

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    static async getCurrentUser(req, res, next) {
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
    }

    static async setUserInfo(req, res, next) {
        try {
            const _id = req.params.id;

            const toUpdate = { ...req.body };

            const updatedUser = await userAuthService.setUser({
                _id,
                toUpdate,
            });

            if (updatedUser.errorMessage) {
                throw new Error(updatedUser.errorMessage);
            }

            res.status(200).json(updatedUser);
        } catch (error) {
            next(error);
        }
    }

    static async refreshToken(req, res, next) {
        // refresh 함수를 쪼개면 여기서 처리할게 있을수도 있음
    }

    static async googleLogin(req, res, next) {
        try {
            const { accessToken } = req.body;
            const { data } = await axios.get(
                `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
            );

            const user = await userAuthService.findOrCreate({ data });

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    // 받은 email을 이용하여 resetToken 생성, 링크 전송
    static async generateResetToken(req, res, next) {
        const email = req.body.email;
        const CLIENT_BASE_URL = "http://localhost:3000";

        const resetToken = await userAuthService.redisToken({ email });

        let transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: `${process.env.NODEMAILER_USER}`,
                pass: `${process.env.NODEMAILER_PASS}`,
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"nuri" <${process.env.NODEMAILER_USER}>`,
            to: email,
            subject: "비밀번호 변경 링크입니다",
            html: `<b>5분 안에 입력해주세요!!<br/><a href="${CLIENT_BASE_URL}/pwlink/${resetToken}">비밀번호 변경 링크</a></b>`,
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        res.status(200).json({
            status: "Success",
            code: 200,
            message: "Sent Auth Email",
        });
    }
}

export { userController };
