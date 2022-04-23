import { TokenModel } from "../schemas/token";

class Token {
  static async create({ newUserToken }) {
    const token = await TokenModel.create(newUserToken);
    return token;
  }

  static async getToken({ user_id }) {
    const userToken = await TokenModel.findOne({ user_id });
    return userToken;
  }
}

export { Token };
