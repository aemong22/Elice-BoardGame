import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { User } from "../db";
import { UserModel } from "../db/schemas/user";

class userAuthService {
    // 유저 정보 추가하기
    static async addUser({ user_name, email, password, phone_number }) {
        // 아이디 중복 확인
        const user = await User.findByUserName({ user_name });
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
        const createdUser = await User.create({ newUser });
        createdUser.errorMessage = null;

        return createdUser;
    }

    // 모든 유저 목록 가져오기
    static async getUsers() {
        const users = await User.findAll();
        return users;
    }

    //비밀번호 찾기 후 변경
    static async setPassword({ email, toUpdate }) {
        // 우선 해당 id 의 유저가 db에 존재하는지 여부 확인
        let user = await User.findByEmail({ email });

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
            user = await User.updatePassword({
                email,
                fieldToUpdate,
                newValue,
            });
        }
        return user;
    }
}

export { userAuthService };
