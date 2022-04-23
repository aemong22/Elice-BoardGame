import { TokenModel } from "../schemas/token";

class Token {
  static async getToken({ user_id }) {
    const userToken = await TokenModel.findOne({ user_id });
    return userToken;
  }

  static async updateRefresh({ _id, refresh_token }) {
    // _id와 refresh token update, 없으면 추가
    const update = await TokenModel.updateOne(
      { _id },
      { _id, refresh_token },
      { upsert: true }
    );
    return update;
  }
}

export { Token };
