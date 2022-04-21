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

  static async getSingleUser() {
    const user = await User.findByEmail();
    return user;
  }
}

export { userAuthService };
