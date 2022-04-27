import bcrypt from "bcrypt";
import { UserRepository, TokenRepository } from "../db";
import config from "../config";
import { sign, refresh } from "../utils/jwt-utils";

class userAuthService {
    // 유저 정보 추가하기
    static async addUser({ user_name, email, password, phone_number }) {
        // 아이디 중복 확인
        const user = await UserRepository.findByEmail({ email });
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
        };

        // db에 저장
        const createdUser = await UserRepository.create({ newUser });
        createdUser.errorMessage = null;

        return createdUser;
    }

    // 모든 유저 목록 가져오기
    static async getUser() {
        const users = await UserRepository.findAll();
        return users;
    }

    static async getSingleUser({ email, password }) {
        const user = await UserRepository.findByEmail({ email });

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
        const refreshTokenInsert = await TokenRepository.updateRefresh({
            _id: user._id,
            refresh_token,
        });

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
        const user = await UserRepository.findByUserId({ _id });

        if (!user) {
            const errorMessage = "해당 메일은 가입 내역이 없습니다.";
            return { errorMessage };
        }
        return user;
    }

    //비밀번호 찾기 후 변경
    static async setPassword({ email, toUpdate }) {
        // 우선 해당 id 의 유저가 db에 존재하는지 여부 확인
        let user = await UserRepository.findByEmail({ email });

        // db에서 찾지 못한 경우, 에러 메시지 반환
        if (!user) {
            const errorMessage =
                "가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        if (toUpdate.password) {
            const hashedPassword = await bcrypt.hash(toUpdate.password, 10);
            const fieldToUpdate = "password";
            const newValue = hashedPassword;
            user = await UserRepository.updatePassword({
                email,
                fieldToUpdate,
                newValue,
            });
        }
        return user;
    }
}

export { userAuthService };
