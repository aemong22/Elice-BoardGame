import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { User, Token } from "../db";
import { UserModel } from "../db/schemas/user";
import config from "../config";
import { sign, refresh } from "../utils/jwt-utils";

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

  static async getSingleUser({ email, password }) {
    const user = await User.findByEmail({ email });

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

    const newUserToken = { user_id: user._id, refresh_token };

    const refreshTokenInsert = await Token.create({ newUserToken });

    const { _id, user_name, phone_number } = user;

    const logedinUser = {
      token,
      _id,
      email,
      user_name,
      phone_number,
      token,
      refresh_token,
      errorMessage: null,
    };

    return logedinUser;
  }

  static async getUserInfo({ _id }) {
    const user = await User.findByUserId({ _id });

    if (!user) {
      const errorMessage = "해당 메일은 가입 내역이 없습니다.";
      return { errorMessage };
    }
    return user;
  }
}

export { userAuthService };
