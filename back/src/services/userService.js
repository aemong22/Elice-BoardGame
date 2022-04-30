import bcrypt from "bcrypt";
import { sign, refresh } from "../utils/jwt-utils";
import { UserModel } from "../db/schemas/user";
import { TokenModel } from "../db/schemas/token";
import { createClient } from "redis";

class userAuthService {
    // 유저 정보 추가하기
    static async addUser({ user_name, email, password, phone_number, image }) {
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
        };

        // db에 저장
        const createdUser = await UserModel.create(newUser);
        createdUser.errorMessage = null;

        return createdUser;
    }

    // 모든 유저 목록 가져오기
    static async getUser() {
        const users = await UserModel.find({});
        return users;
    }

    static async getSingleUser({ email, password }) {
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
        const user = await await UserModel.findOne({ _id });

        if (!user) {
            const errorMessage = "해당 메일은 가입 내역이 없습니다.";
            return { errorMessage };
        }
        return user;
    }

    //비밀번호 찾기 후 변경
    static async setPassword({ resetToken, toUpdate }) {
        const client = createClient();

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

        if (toUpdate.password) {
            const hashedPassword = await bcrypt.hash(toUpdate.password, 10);
            const filter = { email: email };
            const update = { ["password"]: hashedPassword };
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

        if (toUpdate.user_name) {
            const filter = { _id };
            const update = { ["user_name"]: toUpdate.user_name };
            const option = { returnOriginal: false };
            user = await UserModel.findOneAndUpdate(filter, update, option);
        }

        if (toUpdate.email) {
            const filter = { _id };
            const update = { ["email"]: toUpdate.email };
            const option = { returnOriginal: false };
            user = await UserModel.findOneAndUpdate(filter, update, option);
        }

        if (toUpdate.password) {
            const hashedPassword = await bcrypt.hash(toUpdate.password, 10);
            const filter = { _id };
            const update = { ["password"]: hashedPassword };
            const option = { returnOriginal: false };

            user = await UserModel.findOneAndUpdate(filter, update, option);
        }

        if (toUpdate.phone_number) {
            const filter = { _id };
            const update = { ["phone_number"]: toUpdate.phone_number };
            const option = { returnOriginal: false };
            user = await UserModel.findOneAndUpdate(filter, update, option);
        }

        if (toUpdate.image) {
            const filter = { _id };
            const update = { ["image"]: toUpdate.image };
            const option = { returnOriginal: false };
            user = await UserModel.findOneAndUpdate(filter, update, option);
        }

        return user;
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

    //redis 토큰 생성
    static async redisToken({ email }) {
        const user = await UserModel.findOne({ email });

        if (!user) {
            const errorMessage =
                "해당 이메일은 존재하지 않습니다. 다시 한 번 확인해주세요.";
            return { errorMessage };
        }

        const client = createClient();

        client.on("error", (err) => console.log("Redis Client Error", err));

        await client.connect();
        const token = sign(email);

        await client.set(token, email);
        console.log(client.get(token));

        client.expire(token, 10);

        return token;
    }
}

export { userAuthService };
