import bcrypt from "bcrypt";
import { sign, refresh } from "../utils/jwt-utils";
import { UserModel } from "../db/schemas/user";
import { TokenModel } from "../db/schemas/token";
import { FavoriteModel } from "../db/schemas/favorite";
import { createClient } from "redis";
import nodemailer from "nodemailer";

class userAuthService {
    // 유저 정보 추가하기
    static async addUser({
        user_name,
        email,
        password,
        phone_number,
        image,
        OAuthProvider,
    }) {
        // 아이디 중복 확인
        const user = await UserModel.findOne({ email });
        if (user) {
            const errorMessage =
                "현재 이 아이디는 사용중입니다. 다른 아이디를 입력해주세요.";
            return { errorMessage };
        }

        // 비밀번호 해쉬화
        const hashPasswd = await bcrypt.hash(password, 10);

        const newUser = {
            user_name,
            email,
            password: hashPasswd,
            phone_number,
            image,
            OAuthProvider,
        };

        // db에 저장
        const createdUser = await UserModel.create(newUser);
        await FavoriteModel.create({ user: createdUser._id });

        createdUser.errorMessage = null;

        return createdUser;
    }

    // 모든 유저 목록 가져오기
    static async getUsers() {
        const users = await UserModel.find({});
        return users;
    }

    static async getUser({ email, password }) {
        const user = await await UserModel.findOne({ email });

        if (!user) {
            const errorMessage = "해당 이메일은 가입 내역이 없습니다.";
            return { errorMessage };
        }

        const correctPasswordHash = user.password;
        const isPasswordCorrect = await bcrypt.compare(
            password,
            correctPasswordHash
        );

        if (!isPasswordCorrect) {
            const errorMessage = "비밀번호가 일치하지 않습니다.";
            return { errorMessage };
        }

        // 로그인 성공 시 토큰 생성
        const token = sign(user._id);
        const refresh_token = refresh();

        // refresh token 저장 시 update로 사용
        // refresh token 이 없으면 저장하기
        const refreshTokenInsert = await TokenModel.updateOne(
            { _id: user._id },
            { _id: user._id, refresh_token },
            { upsert: true }
        );

        const { _id, user_name, phone_number } = user;

        const logedinUser = {
            _id,
            email,
            user_name,
            phone_number,
            token,
            refresh_token,
        };

        return logedinUser;
    }

    static async getUserInfo({ _id }) {
        const user = await UserModel.findOne({ _id });

        if (!user) {
            const errorMessage = "해당 메일은 가입 내역이 없습니다.";
            return { errorMessage };
        }
        return user;
    }

    //email로 회원정보 찾기
    static async getUserInfoByEmail({ email }) {
        const user = await UserModel.findOne({ email });

        if (!user) {
            const errorMessage = "해당 메일은 가입 내역이 없습니다.";
            return { errorMessage };
        }
        return user;
    }

    //비밀번호 찾기 후 변경
    static async setPassword({ resetToken, toUpdate }) {
        const client = createClient({
            url: `redis://${process.env.REDIS_URL}:6379`,
        });

        client.on("error", (err) => console.log("Redis Client Error", err));

        await client.connect();
        const email = await client.get(resetToken);

        if (!email) {
            const errorMessage =
                "유효 토큰이 없습니다. 다시 한 번 비밀번호 찾기를 진행해주세요.";
            return { errorMessage };
        }

        // 우선 해당 id 의 유저가 db에 존재하는지 여부 확인
        let user = await UserModel.findOne({ email });

        // db에서 찾지 못한 경우, 에러 메시지 반환
        if (!user) {
            const errorMessage =
                "가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }
        console.log(toUpdate.newPassword);

        if (toUpdate.newPassword) {
            const hashedPassword = await bcrypt.hash(toUpdate.newPassword, 10);
            const filter = { email: email };
            const update = { password: hashedPassword };
            const option = { returnOriginal: false };

            user = await UserModel.findOneAndUpdate(filter, update, option);
        }
        return user;
    }

    static async setUser({ _id, toUpdate }) {
        let user = await UserModel.findOne({ _id });

        if (!user) {
            const errorMessage =
                "가입 내역이 없습니다. 다시 한번 확인해주세요.";
            return { errorMessage };
        }

        const filter = { _id };
        const { user_name, email, password, phone_number, image } = toUpdate;
        const data = {
            ...(user_name && { user_name }),
            ...(email && { email }),
            ...(password && {
                password: await bcrypt.hash(toUpdate.password, 10),
            }),
            ...(phone_number && { phone_number }),
            ...(image && { image }),
        };

        const option = { returnOriginal: false };

        user = await UserModel.findOneAndUpdate(filter, data, option);

        return user;
    }

    //oauth 로그인 및 회원가입을 위한 함수
    static async findOrCreate({ data }) {
        const email = data.email;
        const user_name = data.name;
        const password = data.id;
        const OAuthProvider = "google";
        let user = await UserModel.findOne({ email });

        if (!user) {
            await this.addUser({ user_name, email, password, OAuthProvider });
        }

        const userinfo = await this.getUser({ email, password });
        return userinfo;
    }

    //redis 토큰 생성
    static async redisToken({ email }) {
        const user = await UserModel.findOne({ email });
        const CLIENT_BASE_URL = "http://localhost:3000";

        if (!user) {
            const errorMessage =
                "해당 이메일은 존재하지 않습니다. 다시 한 번 확인해주세요.";
            return { errorMessage };
        }

        if (user.OAuthProvider === "google") {
            return false;
        }

        const client = createClient({
            url: `redis://${process.env.REDIS_URL}:6379`,
        });

        client.on("error", (err) => console.log("Redis Client Error", err));

        await client.connect();
        const token = sign(email);

        await client.set(token, email);
        console.log(client.get(token));

        client.expire(token, 300);

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
            html: `<b>5분 안에 입력해주세요!!<br/><a href="${CLIENT_BASE_URL}/pwlink/${token}">비밀번호 변경 링크</a></b>`,
        });

        console.log("Message sent: %s", info.messageId);

        return token;
    }

    //oauth 로그인 및 회원가입을 위한 함수
    static async findOrCreate({ data }) {
        const email = data.email;
        const user_name = data.name;
        const password = data.id;
        let user = await UserModel.findOne({ email });

        if (!user) {
            await this.addUser({ user_name, email, password });
        }

        const userinfo = await this.getSingleUser({ email, password });
        return userinfo;
    }
}

export { userAuthService };
